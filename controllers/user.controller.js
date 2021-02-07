class UserController {
   
    index(req, res) {
        res.render("index.ejs");
    }

    async login(req, res) {}
}
module.exports = UserController;