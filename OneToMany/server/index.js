const express = require("express")
const mongoose = require("mongoose");
const Router = require("./routes/userRoute")
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

mongoose.connect("mongodb://localhost:27017/ForTest").then(()=>{
    console.log("mongodb is connected!");
})

app.use("/author",Router)

app.listen(3000,()=>{
    console.log("Server is running on port 3000"); 
})