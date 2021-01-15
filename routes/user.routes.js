const Express 			    = require("express");
const UserRoutes 		    = Express.Router();
const UserController        = require('../controllers/user.controller');

UserRoutes.get("/", function(req, res, next) {
    new UserController(req, res).index();
});

UserRoutes.post("/login", function(req, res, next) {
    new UserController(req, res).login();
});

module.exports = UserRoutes;
