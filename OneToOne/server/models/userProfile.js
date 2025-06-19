const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"OneToOne"}
})

module.exports = mongoose.model("OneToOnePro",profileSchema)