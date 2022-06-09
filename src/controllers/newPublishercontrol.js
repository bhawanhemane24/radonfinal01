const newPublisherModel=require("../models/newPublisherModel")
 const createPublisher=async function(req,res){
     let publisher=req.body
     let createPublisher=await newPublisherModel.create(publisher)
     res.send({data:createPublisher})
 }
 const getPublisherdata= async function(req,res) {
    
     const publisher=await newPublisherModel.find()
     res.send({data:publisher})
 }
 module.exports.createPublisher= createPublisher
 module.exports.getPublisherdata=getPublisherdata