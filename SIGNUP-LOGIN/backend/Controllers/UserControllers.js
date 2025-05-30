const UserModel = require("../Models/UserModels")

const userSignup = async (req, res) => {
    const { userName, Contact, Email, Password } = req.body;

    try {
        await UserModel.create({
            userName,
            Contact,
            Email,
            Password
        })
        res.send("Signup Successfully!")
    } catch (error) {
        console.log(error);

    }

}

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const findData = await UserModel.findOne({ Email: email });

    try {
        if (!findData) {
            res.status(401).send({ msg: "Email is Not Found" })
        }
        if (findData.Password != password) {
            res.status(401).send({ msg: "Password is Wrong" })
        }

    } catch (error) {
        console.log(error);

    }


    res.send({ msg: "User Login Successfully!", myData: findData })

}

module.exports = { userSignup, userLogin }