const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/vacationpunk');

var Schema = mongoose.Schema

//新建约束
var hotelSchema = new Schema({
    hotelname:{
        type:String,
        require:true
    },
    hotelimg:{
        type:String,
        require:true
    },
    hoteladdr:{
        type:String,
        require:true
    },
    hotelscore:{
        type:String,
        require:true
    }
},
    {
        collection:"hoteldb"
    })
//导出模板构造函数
module.exports = mongoose.model('hoteldb',hotelSchema);

