const Controller        = require('./controller');
const FormHelper		= require('../helpers/form.helper');
const UserModel      	= require("../models/user.model");
const Constants         = require("../config/constants");

class UserController extends Controller {

    constructor(req, res) {
        super(req, res);
    }
    
    index() {
		this.page_params.PAGE.title = "Login";
        this.page_params.PAGE.view = "index";

        /* Custom javascript for index page */
		// this.page_params.PAGE.assets.javascripts.push({ file: `/public/javascripts/custom/user/${this.page_params.PAGE.view}_be.js` });

        this.res.render("layouts/user.layout.ejs", this.page_params);
    }

    async login() {
        let formHelper      = new FormHelper();
        let params          = formHelper.checkLoginParams({require: "email, password"}, this.req);
        let result          = {};
    
        if(params.status){
            // check if user exists.
            let userModel = new UserModel();
            let user = await userModel.getUser(params.filtered_fields.email);

            if(user.status) {
                if(params.filtered_fields.password == user.result.password) {
                    // login
                    result.redirect_url = Constants.FRONTEND_URL + ':' + Constants.PORT + '/wall';
                    result.status       = user.status;
                    this.req.session.user    = user.result.first_name;
                    this.req.session.user_id = user.result.id;
                    
                    this.res.json(result);
                } else {
                    this.res.json({
                        status: false,
                        message: "Invalid email or password combination.",
                        err: user.message
                    });    
                }
            } else {
                this.res.json({
                    status: false,
                    message: "Invalid email or password combination.",
                    err: user.message
                });
            }
        } else {
            this.res.json({
                status: false,
                message: "A required field is missing",
                err: params.missing_fields
            });
        } 
    }
}
module.exports = UserController;