const express = require("express");
const router = express.Router();
const {userSave,Display} = require("../controllers/userController")

router.post("/usersave",userSave);
router.get("/display",Display);

module.exports = router;