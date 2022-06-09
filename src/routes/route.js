const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newAuthorcontroller=require("../controllers/newAuthorcontroller");
const newPublishercontroller=require("../controllers/newPublishercontrol")
const newPublisherModel = require("../controllers/newPublishercontrol");
const newbookcontroller=require("../controllers/newbookcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createAuthor", authorController.createAuthor  )

//router.get("/getAuthorsData", authorController.getAuthorsData)

//router.post("/createBook", bookController.createBook  )

//router.get("/getBooksData", bookController.getBooksData)

//router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.post("/createAuthor",newAuthorcontroller.createAuthor)
router.get("/getAuthorData", newAuthorcontroller.getAuthorData)
router.post("/createPublisher",newPublishercontroller.createPublisher)
router.get("/getPublisherdata",newPublishercontroller.getPublisherdata)
router.post("/createBook",newbookcontroller.createBook)
router.get("/getBooksData",newbookcontroller. getBooksData)
router.get("/getdetaildata",newbookcontroller.getdetaildata)



module.exports = router;
