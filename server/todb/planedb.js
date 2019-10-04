const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/vacationpunk');

var Schema = mongoose.Schema

//新建约束
var planeSchema = new Schema({
    planestartplace:{
        type:String,
        require:true
    },
    planeendplace:{
        type:String,
        require:true
    },

    planestart:{
        type:String,
        require:true
    },
    planeend:{
        type:String,
        require:true
    },
    planemoney:{
        type:Number,
        require:true
    },
},
{
    collection:"planedb"
})
//导出模板构造函数
module.exports = mongoose.model('planedb',planeSchema);

