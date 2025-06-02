const express = require("express");
const app =express();
const mongoose = require("mongoose");
const studRoutes = require("./Routes/StudentRoutes")
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config()
const port = process.env.PORT;

mongoose.connect(process.env.BACKENDAPI).then(()=>{
    console.log("DB Connected Successfully!!");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use("/students",studRoutes)

app.listen(port,()=>{
    console.log(`Servier is Runnin on Port ${port}`);
})