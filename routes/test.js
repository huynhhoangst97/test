var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//var db = require('../connectMysql');
var router=express.Router();
var location = require('../model/location');


router.get("/",function(req,res) {
<<<<<<< HEAD
	if(req.isAuthenticated()){
		res.render("./index	");
	}else {
		res.render("./loginPage");
	}
=======
	res.render("./test")
>>>>>>> 15.4
})

module.exports=router;