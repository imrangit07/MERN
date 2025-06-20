const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    authorName:String,
    address:String,
    booksId:[{type:mongoose.Schema.Types.ObjectId, ref:"OneToManyBooks"}]

})

module.exports = mongoose.model("OneToMany",authorSchema)