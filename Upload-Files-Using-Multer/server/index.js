const express = require('express');
const multer = require('multer');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userModels = require("./models/models")
const path = require('path')

const cors = require("cors");
require("dotenv").config()
const app = express();

const port = process.env.PORT;



mongoose.connect(process.env.BACKENDAPI).then(() => {
    console.log("DB Connected Successfully!!");
})
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


app.post('/upload', upload.single('image'), async(req, res) => {
    
    const {name,age,email} = req.body;
    const image=req.file.path
    console.log(image);
    
    const Data = await userModels.create({
        name,
        age,
        email,
        image
    })
    
    res.send({mes:'Data Save Success fully!',Data});
});

app.get("/display",async(req,res)=>{
    const Data = await userModels.find();

    console.log(Data);
    res.send(Data);
    
})

app.listen(port, () => console.log(`App listening on port ${port}!`));
