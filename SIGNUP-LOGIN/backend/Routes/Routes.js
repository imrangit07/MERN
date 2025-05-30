const express = require("express");
const Routers = express.Router();
const userControllers = require("../Controllers/UserControllers")


Routers.post("/usersignup",userControllers.userSignup)
Routers.post("/userlogin",userControllers.userLogin)


module.exports = Routers;