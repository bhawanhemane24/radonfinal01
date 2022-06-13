const mongoose =require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema= new mongoose.Schema({

	userId: {
        type:ObjectId,
        ref:'customer'
    },
	productId:{
        type:ObjectId,
        ref:'product',
    },
	amount: Number,
	isFreeAppUser: {
        type:Boolean,
    },
	date:String,
})
module.exports=mongoose.model('order',orderSchema)