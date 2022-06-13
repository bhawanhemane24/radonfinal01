
const mongoose= require("mongoose")
const userModel1=require("../models/userModel1.js")
const createuser= async function(req,res){
    let headerData=req.headers
    let data1=headerData.isfreeappuser
    console.log(data1);
    if(!data1){(res.send({msg:"isfreeappuser is required"}))}
    else{
    let data=req.body
     let savedData= await userModel1.create(data)
    res.send({msg: savedData})
    }

}
const getuser=async function(req,res){
    let allcustomer=await userModel1.find()
    res.send({msg:allcustomer}) 
}
module.exports.createuser=createuser
module.exports.getuser = getuser
