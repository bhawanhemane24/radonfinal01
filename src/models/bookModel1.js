const mongoose = require('mongoose');

const bookSchema1 = new mongoose.Schema( {
    bookName: {
        type:String, 
        required:true
    },
    
    price: {
        indianPrice: String,
        europePrice: String,
    },
    year: {type: Number, default: 2021},
    tags:[String],
           authorName:String,
           totalPages:Number,
           stockAvailable:Boolean ,
}, { timestamps: true });


module.exports = mongoose.model('Book1', bookSchema1)