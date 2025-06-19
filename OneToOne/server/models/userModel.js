const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:String,
    userEmail:String
})

module.exports = mongoose.model("OneToOne",userSchema)