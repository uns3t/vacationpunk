var express=require('express');
var hoteldb=require('./todb/hoteldb')
var router=express.Router()



router.post("/hotelList",function (req,res) {
    // console.log(req.body)
    var thedata={}
    hoteldb.find({place: req.body.name},function (err,hoteltemp) {
        thedata={
            hotellist:hoteltemp,
            success:true
        }
        console.log(thedata)
        res.send(thedata)

    })


})

module.exports=router;
