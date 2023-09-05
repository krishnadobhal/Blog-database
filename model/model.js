const mongoose = require("mongoose")
const posts=[];

const postSchema=mongoose.Schema({
    topic:String,
    post:String
})
const Post=mongoose.model("Post",postSchema)

module.exports=Post