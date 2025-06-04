const express = require('express');
const multer = require('multer');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config()
const app = express();

const port = process.env.PORT;

mongoose.connect(process.env.BACKENDAPI).then(()=>{
    console.log("DB Connected Successfully!!");
})
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/home', upload.single('user_file'), (req, res) => {
    res.send('File uploaded successfully!');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
