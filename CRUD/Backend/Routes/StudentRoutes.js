const express = require("express");
const Route = express.Router();
const StudRoute=require("../Controllers/StudentControllers");


Route.post("/savedata",StudRoute.SaveData);
Route.get("/display",StudRoute.StuDisplay);
Route.post("/update",StudRoute.UpdateData);
Route.delete("/datadelete",StudRoute.StuDelete);
Route.get("/editdata",StudRoute.EditDataShow);
Route.put("/editsave",StudRoute.EditDataSave);
Route.get("/searchData",StudRoute.searchData);

module.exports=Route;