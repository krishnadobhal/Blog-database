const express=require("express")
const route=express.Router()
const { secondRoute, mainRoute, aboutRoute, contactRoute, composeRoute, composeAdd } = require("../controller/control");

route.get("/user/:topic",secondRoute)

route.get("/",mainRoute)

route.get("/AboutUs",aboutRoute)

route.get("/ContactUs",contactRoute)

route.get("/compose",composeRoute)

route.post("/compose",composeAdd)

module.exports=route;
