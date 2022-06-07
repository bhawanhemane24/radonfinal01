const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
const BooksController1= require("../controllers/bookController1")
const BbooksModel1= require("../models/bookModel1.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

//router.post("/createBook", BookController.createBook  )

//router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook1" , BooksController1.createBook1)
router.get("/getBooksData1", BooksController1.getBookData1)
router.get("/getBooksInYear", BooksController1.getBooksInYear)
router.get("/getParticularBooks", BooksController1.getParticularBooks)
router.get("/getXINRBooks", BooksController1.getParticularBooks)

router.get("/getRandomBooks", BooksController1.getRandomBooks)

module.exports = router;