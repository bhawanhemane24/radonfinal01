const mongoose= require("mongoose")
const orderModel=require("../models/orderModel.js")
const createOrder=async function(req,res){
    let data=req.body
    let data1=headerData.isfreeappuser
    console.log(data1);
    if(!data1){(res.send({msg:"isfreeappuser is required"}))}
    else{
    let savedData=await orderModel.create(data)
    res.send({msg:savedData})
    }
}
const getOrder=async function(req,res){
    let allOrder=await orderModel.find().populate('userId','productId')
    res.send({msg:allOrder})
}
module.exports.createOrder= createOrder
module.exports.getOrder= getOrder