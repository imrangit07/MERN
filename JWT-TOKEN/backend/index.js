const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/userRoutes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/ForTest').then(() => {
    console.log('Mongodb is connected');
});


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});