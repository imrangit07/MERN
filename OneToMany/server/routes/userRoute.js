const express = require("express");
const router = express.Router();
const {userSave,Display,addBook} = require("../controllers/userController")

router.post("/save",userSave);
router.get("/display",Display);
router.patch("/addBook/:id",addBook)

module.exports = router;