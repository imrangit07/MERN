const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName:String,
    bookPrice:Number,
})

module.exports = mongoose.model("OneToManyBooks",bookSchema)