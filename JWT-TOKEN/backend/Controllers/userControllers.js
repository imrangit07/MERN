const UserModel = require('../Models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserRegistration = async(req, res) => {
   const { name, email, password} = req.body;
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);
   try {
    await UserModel.create({ username: name, email, password: hashedPassword });
   res.status(201).send({msg: "User registered successfully"});
   } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send({msg: "User registration failed"});        
   }  
}

const UserLogin = async(req, res) => {
   const { email, password } = req.body;
   try {
       const user = await UserModel.findOne({ email });
       if (!user) {
           return res.status(404).send({ msg: "User not found" });
       }
       const isMatch = await bcrypt.compare(password, user.password);
       if (!isMatch) {
           return res.status(401).send({ msg: "Invalid password" });
       }
       const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
       res.status(200).send({ msg: "Login successful",token});
   } catch (error) {
       console.error('Error logging in user:', error);
       res.status(500).send({ msg: "User login failed" });
   }
}
const isAuthUser = async (req, res) => {
    
    const token = req.headers['auth-token'];
    if (!token) {
        return res.status(401).send({ msg: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded.id);
        if (!user) {
            return res.status(404).send({ msg: "User not found" });
        }
        res.status(200).send();
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(500).send({ msg: "Failed to authenticate user" });
    }
};

module.exports = { UserRegistration, UserLogin, isAuthUser };