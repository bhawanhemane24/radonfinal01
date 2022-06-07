
const bookModel1 = require("../models/bookModel1")

const createBook1= async function (req, res) {
    let data= req.body
    let savedData= await bookModel1.create(data)
    res.send({msg: savedData})
}

const getBookData1= async function (req, res) {
    //let allBook= await bookModel1.find()
    let allBook= await bookModel1.find({bookName:"THEGOLDENMAN" ,authorName:"sk"})
    res.send({msg: allBook})
}
const getBooksInYear = async function (req, res) {
    let allBook= await bookModel1.find({year:2021})
    res.send({msg: allBook})

}
const getParticularBooks = async function (req, res) {
    let allBook= await bookModel1.find({$or:[{bookName:"THEGOLDENTEMPLE"},{year:2020}]})
    res.send({msg: allBook})

}
const getXINRBooks= async function (req, res) {
let allBooks= await bookModel1.find({ indianPrice : { $in: [100, 200, 500] }     })
res.send({msg: allBook})
}
const getRandomBooks  = async function (req, res) {
    //let allBook= await bookModel1.find({[$or{totalPages:{$gt:500}}{stockAvailable:"true"}]})
    let allBooks= await bookModel1.find({    totalPages : {$gt: 500}})
    res.send({msg: allBook})

}
module.exports.createBook1= createBook1
module.exports.getBookData1= getBookData1
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks