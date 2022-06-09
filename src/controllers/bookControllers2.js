const bookModel2 = require("../models/bookModel2")
const authorModel= require("../models/authorModel")

const createbook= async function(req,res){
    let data=req.body
    let author_id=data.author_id
    if(!author_id)return res.send("not valid")
    let savedData= await bookModel2.create(data)
    res.send({msg:savedData})
}
const createAuthor = async function(req,res){
    let data=req.body
    let author_id=data.author_id
    if(!author_id)return res.send("not valid")
    let savedData=await authorModel.create(data)
   
    res.send({msg:savedData})
}
const getbookData= async function(req,res){
    let data= await authorModel.find({author_name: "Chetan Bhagat"}).select("author_id")
    let allbook= await bookModel2.find({author_id:data[0].author_id})
    res.send({msg:allbook})
}
 const authorOfBook = async function(req,res){
     let data=await bookModel2. findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
     let authorData = await authorModel.find({author_id:data.author_id})
       let price= data.prices
     res.send({msg:authorData,price})
 }
 const findBookcost= async function(req,res){
     let data=await bookModel2.find({price :{ $gte: 50,$lte:100}}).select({author_id:1,_id:0})
     let writedata = data.author_id
     let writename=await authorModel.find({author_id:writedata}).select({author_id:1, _id:0})
        res.send({msg:data,writename})
    }  
    const bookByAuthorid=async function(req,res){
  let writename=await bookModel2.find({author_name:"Chetan Bhagat"}).select({names:1,_id:0})
  console.log(writename)
         
        res.send({msg:writename})
    }   
    const listofauthor=async function(req,res){
        let data =await bookModel2.find({ratings:{$gte:4}}).select({author_id:1,ratings:1,_id:0})
        console.log(data);
        let writedata=await authorModel.find({age:{$gte:50}}).select({author_name:1,age:1,_id:0})
        console.log(writedata);
        res.send({msg:data,writedata})
    } 

 module.exports.createbook = createbook
 module.exports.createAuthor = createAuthor
 module.exports.getbookData = getbookData
 module.exports.authorOfBook = authorOfBook
 module.exports.findBookcost =findBookcost
 module.exports.bookByAuthorid=bookByAuthorid
 module.exports.listofauthor=listofauthor