const express = require("express");
const app =express();
const mongoose = require("mongoose");
const studRoutes = require("./Routes/StudentRoutes")
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

mongoose.connect("mongodb://localhost:27017/studentsDB").then(()=>{
    console.log("DB Connected Successfully!!");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use("/students",studRoutes)

app.listen(port,()=>{
    console.log(`Servier is Runnin on Port ${port}`);
})