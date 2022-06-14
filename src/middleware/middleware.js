const mid1= function ( req, res, next) {
    req.hello= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);
    next()
}
const mid2= function ( req, res, next) {
    req.hello= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid2")
let header= req.headers
let token=header["x-Auth-token"]||header["x-auth-token"]
      
if(!token==true){
    return res.send("token is not present")
}
console.log(token)
next()
}
module.exports.mid1=mid1
module.exports.mid2=mid2