const { googleLogin } = require('../controllers/authController');

const Router = require('express').Router();


Router.get("/test",(req,res)=>{
    res.send("its working");
})
Router.post('/google',googleLogin)
module.exports = Router;