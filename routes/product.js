var express = require('express');
var router=express.Router();
var location = require("../model/location");
var classLocation = require("../classLocation");

var toaDo = new classLocation();

router.post("/", (req, res) => {
    location.find({ tag: "aa02" }, (err, result) => {
        toaDo.xcale = result[0]["location"]["xcale"];
	    toaDo.ycale = result[0]["location"]["ycale"];
     });
    res.send({xcale:toaDo.xcale,ycale:toaDo.ycale})
<<<<<<< HEAD
    res.send("thanh cong");
=======
    res.send("thanhcong");
>>>>>>> 15.4
});

module.exports=router;