const mongoose = require("mongoose");

const UserScrema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    image:String
})

module.exports = mongoose.model("User",UserScrema);