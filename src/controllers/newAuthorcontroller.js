const newAuthorModel = require("../models/newAuthorModel")

const createAuthor= async function(req,res)
{
    let author=req.body
    let authorCreate=await newAuthorModel.create(author)
    res.send({data:authorCreate})
}
const getAuthorData =async function(req,res)
{
    let author=await newAuthorModel.find()
    res.send({data:author})
}
module.exports.createAuthor=createAuthor
module.exports.getAuthorData=getAuthorData