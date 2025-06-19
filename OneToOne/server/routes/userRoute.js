const express = require("express");
const router = express.Router();
const {userSave} = require("../controllers/userController")

router.post("/usersave",userSave);

module.exports = router;