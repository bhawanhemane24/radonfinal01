const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const  mongoose  = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})


//app.use (
  //  function (req, res, next) {
    //    console.log ("inside GLOBAL MW");
      //  next();
  //}
 // );
 app.use(
    function(req,res,next){
        console.log("hi ,you see current time,Ip " )
        let route=req.originalUrl;
        let userIp=req.socket.remoteAddress
       let dateTime= moment().format('MMMM Do YYYY, h:mm:ss a')
       console.log(dateTime)
        console.log(route);
        console.log(userIp);
        next()
    }
 )

app.use('/', route);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
