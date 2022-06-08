const bookModel2 = require("../models/bookModel2")
const authorModel= require("../models/authorModel")

const createbook= async function(req,res){
    let data=req.body
    let savedData= await bookModel2.create(data)
    res.send({msg:savedData})
}
const createAuthor = async function(req,res){
    let data=req.body
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
     let data=await (await bookModel2.find({price :{ $gte: 50,$lte:100}}).select({author_id:1})).map(names=>authorModel.author_name)
        res.send({msg:data})
    }      

 module.exports.createbook = createbook
 module.exports.createAuthor = createAuthor
 module.exports.getbookData = getbookData
 module.exports.authorOfBook = authorOfBook
 module.exports.findBookcost =findBookcost