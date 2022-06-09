
const bookModel1 = require("../models/bookModel1")

const createBook1= async function (req, res) {
    let data= req.body
    
    let savedData= await bookModel1.create(data)
    res.send({msg: savedData})
}

const getBookData1= async function (req, res) {
    //let allBook= await bookModel1.find()
    let allBook= await bookModel1.find().select({bookName:1 ,authorName:1,_id:0});
    res.send({msg: allBook})
}
const getBooksInYear = async function (req, res) {
    let year=req.body.year
    let allBook=bookModel1.find({year:year})
    res.send({msg: allBook})

}
const getParticularBooks = async function (req, res) {
    let condition=req.body
    let allBook= await bookModel1.find({$or:[{bookName:"THEGOLDENTEMPLE"},{year:2020}]})
    res.send({msg: allBook})

}
const getXINRBooks= async function (req, res) {
let allBooks= await bookModel1.find({["price.indianPrice"]: {$in:["100INR", "200INR", "500INR"]} })
res.send({msg: allBook})
}
const getRandomBooks  = async function (req, res) {
    //let allBook= await bookModel1.find({[$or{totalPages:{$gt:500}}{stockAvailable:"true"}]})
    let allBook= await bookModel1.find({$or:[{stockAvailable:"true"},{ totalPages : {$gt: 500}}]})
    res.send({msg :allBook})

}
module.exports.createBook1= createBook1
module.exports.getBookData1= getBookData1
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
