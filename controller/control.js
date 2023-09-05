const mongoose  = require("mongoose")
const Post=require("../model/model")
const bodyParser=require("body-parser")
const _ = require('lodash')

const secondRoute=(req,res)=>{
    const reqTopic = _.lowerCase(req.params.topic) //lowercase is lodash function
    Post.findOne({topic:reqTopic})
    .then(post=>{
        res.render("cont",{post :post})
    })
    .catch(error=>{
        console.log(error)
    })
}

const mainRoute=(req,res)=>{
    Post.find({})
    .then(post=>{
        res.render("index",{posts :post})
    })
    .catch(error=>{
        console.log(error)
    })
    
}
const aboutRoute=(req,res)=>{
    res.render("AboutUs")
}
const contactRoute=(req,res)=>{
    res.render("ContactUs")
}
const composeRoute=(req,res)=>{
    res.render("compose")
}
const composeAdd=(req,res)=>{
    let a=new Post({
        post: req.body.newitems,
        topic: _.lowerCase(req.body.heading)
    });
    a.save();
    res.redirect('/')
}

module.exports={
    mainRoute,
    aboutRoute,
    contactRoute,
    composeRoute,
    composeAdd,
    secondRoute
}