const mongoose= require("mongoose")
const productModel=require("../models/productModel.js")
const createproduct= async function(req,res){
    let data2=req.body
    let savedData1=await productModel.create(data2)
    res.send({msg:savedData1})
}
const getProduct= async function(req,res){
    let allproduct=await productModel.find()
    res.send({msg:allproduct}) 
}
 module.exports.createproduct=createproduct
 module.exports.getProduct = getProduct