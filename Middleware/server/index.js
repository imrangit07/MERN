const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());


app.use((req, res, next) => {

    const {Name} = req.body;
    console.log(Name);
    next()

})
app.use((req, res, next) => {
    
    req.body = "mohan";
    console.log(req.body);
    next()

})
app.use((req, res, next) => {
    req.body = "sohan";
    console.log(req.body);

    next()

})
app.use((req, res, next) => {
    req.body = "rohan";
    console.log(req.body);

    next()

})


app.get("/home", (req, res, next) => {
    const {Name} = req.body;
    console.log(Name);
    res.send(Name)

})

app.listen(3000, () => {
    console.log("Server is Running in Port 3000");
})