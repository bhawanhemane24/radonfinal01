
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}
const mid5= function(req,res,next){
    let headerData=req.headers
    let data1=headerData.isfreeappuser
    if(data1==true){
        if (userId==true||productId==true){
            
          next()

        }
        else{
            res.send({msg:"user and prouctid not exsts"})
        }

         next();
    }
}
const mid6=function(req,res,next){
    let data=req.body
    let data1=headerData.isfreeappuser
    req.headers['isfreeappuser']='true'
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.mid5=mid5
module.exports.mid6=mid6
