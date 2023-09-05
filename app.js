const express=require("express")
const bodyParser=require("body-parser")
const _ = require('lodash')
const mongoose = require("mongoose")
const Route=require("./routes/route")

const Mongo_URL= process.env.MONGO_URL || "mongodb://127.0.0.1:27017/Blog"
mongoose.connect(Mongo_URL);



const app=express()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")

app.use("/",Route)

app.listen(80,()=>{
    console.log("listening")
})