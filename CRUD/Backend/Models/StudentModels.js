const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    stuId: Number,
    stuName: String,
    stuCourse: String,
    stuFees: Number
})

module.exports = mongoose.model("StudentDB", StudentSchema)