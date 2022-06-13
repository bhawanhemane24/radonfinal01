const mongoose=require('mongoose')

const userSchema1= new mongoose.Schema({
  name:String ,
    balance:{
        type:Number,
        default:100
    },
    address:String,
    age:Number,
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    isfreeappuser:{
     type:Boolean,
     default:false

    }
}, { timestamps: true });
module.exports= mongoose.model('customer',userSchema1)