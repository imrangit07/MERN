const userModel = require("../models/userModel");
const profileModel = require("../models/userProfile")

const userSave = async(req,res)=>{
    const {userName,userEmail,firstName,lastName} = req.body;
    try {
        const userData = await userModel.create({
            userName,
            userEmail
        });

        const userProfile = await profileModel.create({
            firstName,
            lastName,
            userId:userData._id
        })

        res.status(201).send({msg:"Data Save Successfully!",Data:userProfile})
    } catch (error) {
        res.status(500).send({msg:"Something went wrong!",error:error.message});
    }
}

const Display = async(req,res)=>{
    
    const UserData = await profileModel.find().populate("userId");
    if(!UserData){
        return res.status(404).send({msg:"No user found!"});
    }
    res.status(200).send(UserData)

}
module.exports ={userSave,Display}