const express = require('express');
const app = express();

const authRouter = require("./Routes/authRouter");
require('./Models/dbConnection');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
console.log("Port: ",PORT);

const cors = require('cors')
app.use(express.json());
app.use(cors());
app.use("/auth",authRouter)

app.get("/",(req,res)=>{
    res.send("Heoolow")
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})