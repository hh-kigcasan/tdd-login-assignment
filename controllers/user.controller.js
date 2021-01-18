const Controller        = require('./controller');
const UserModel      	= require("../models/user.model");
const Constants         = require("../config/constants");

class UserController extends Controller {

    constructor() {
        super();
    }
    
    index(req, res) {
		this.page_params.PAGE.title = "Login";
        this.page_params.PAGE.view = "index";

        /* Custom javascript for index page */
		// this.page_params.PAGE.assets.javascripts.push({ file: `/public/javascripts/custom/user/${this.page_params.PAGE.view}_be.js` });

        res.render("layouts/user.layout.ejs", this.page_params);
    }

    async login(req, res) {}
}
module.exports = UserController;