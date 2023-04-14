const express = require('express');
const Contact=require("../models/Contact");

const Detail=require("../models/Detail");
const Slider = require('../models/Slider');
const Service = require('../models/Service');
const User=require('../models/User')
const Work=require('../models/Work')
const routes=express.Router();

routes.get("/", async (req,res)=>{

    const details=await Detail.findOne({"_id":"64351be0e78a0c595b710203"})
    const slides= await Slider.find()
    const services=await Service.find()
    const user=await User.find()
    const work=await Work.find()
    //console.log(details)
    res.render("index", {
        details:details,
        slides:slides,
        services:services,
        user:user,
        work:work
    });
});

routes.get("/gallery", async (req,res)=>{
    const details=await Detail.findOne({"_id":"64351be0e78a0c595b710203"})
    const user=await User.find()
    const work=await Work.find()
    res.render("gallery", {
        details:details,
        user:user,
        work:work
    });
});

routes.post("/process-contact-form", async (request, response)=>{
    console.log(request.body);
    try{
        const data=await Contact.create(request.body)
        response.redirect("/")
    }catch(e)
    {
        response.redirect("/")
    }
})

module.exports=routes;