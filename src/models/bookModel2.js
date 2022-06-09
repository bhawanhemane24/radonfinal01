const mongoose = require('mongoose')
 const bookSchema = new mongoose.Schema( {
     names:String ,
     author_id:String,
     price:Number ,
     ratings: Number

 }, {timestamps:true});


 module.exports = mongoose.model('Book2',bookSchema)

