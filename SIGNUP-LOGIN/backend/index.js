const express = require("express");
const app =express();
const mongoose = require("mongoose");
const userRoutes = require("./Routes/Routes")
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 8000;

mongoose.connect(process.env.DATABASEURL).then(()=>{
    console.log("DB Connected Successfully!!");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use("/users",userRoutes)

app.listen(port,()=>{
    console.log(`Servier is Runnin on Port ${port}`);
})