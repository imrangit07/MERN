const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());


app.use((req, res, next) => {
    console.log(req.body.Name);
    next()

})
app.use((req, res, next) => {

   req.body.Name = "Mohan";
    console.log(req.body.Name);
    next()

})
app.use((req, res, next) => {
    
  req.body.Name = "Rohan";
    console.log(req.body.Name);
    next()

})
app.use((req, res, next) => {
   req.body.Name = "Sohan";
    console.log(req.body.Name);

    next()

})


app.post("/home", (req, res, next) => {
    
    const {Name} = req.body;
    res.send(Name)

})

app.listen(3000, () => {
    console.log("Server is Running in Port 3000");
})