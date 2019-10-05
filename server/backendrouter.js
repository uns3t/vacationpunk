var express=require('express');
var hoteldb=require('./todb/hoteldb')
var planedb=require('./todb/planedb')
var cardb=require('./todb/cardb')
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

router.post("/planeList",function (req,res) {
    console.log(req.body)
    var thedata={}
    planedb.find({planestartplace: req.body.planestartplace,planeendplace: req.body.planeendplace},function (err,planetemp) {
        thedata={
            planelist:planetemp,
            success:true
        }
        console.log(thedata)
        res.send(thedata)

    })
})

router.post("/carList",function (req,res) {
    console.log(req.body)
    var thedata={}
    cardb.find({carplace: req.body.carplace},function (err,cartemp) {
        thedata={
            carlist:cartemp,
            success:true
        }
        console.log(thedata)
        res.send(thedata)

    })


})

module.exports=router;
