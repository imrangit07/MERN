const mongoose = require('mongoose');
require('dotenv').config();
const DBURL = process.env.DBURL;

console.log(DBURL);

mongoose.connect(DBURL).then(()=>{
    console.log("MongoDB is Connected");
}).catch((err)=>{
    console.log(err);
    
})