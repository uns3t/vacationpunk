const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/vacationpunk');

var Schema = mongoose.Schema

//新建约束
var carSchema = new Schema({
        carplace:{
            type:String,
            require:true
        },
        carname:{
            type:String,
            require:true
        },

        carmoney:{
            type:Number,
            require:true
        },
    },
    {
        collection:"cardb"
    })
//导出模板构造函数
module.exports = mongoose.model('cardb',carSchema);

