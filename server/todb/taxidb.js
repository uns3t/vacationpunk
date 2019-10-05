const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/vacationpunk');

var Schema = mongoose.Schema

//新建约束
var taxiSchema = new Schema({
        taxitype:{
            type:String,
            require:true
        },
        taxidetail1:{
            type:String,
            require:true
        },
        taxidetail2:{
            type:String,
            require:true
        },
        taxidetail3:{
            type:String,
            require:true
        },
        taximoney:{
            type:Number,
            require:true
        }
    },
    {
        collection:"taxidb"
    })
//导出模板构造函数
module.exports = mongoose.model('taxidb',taxiSchema);

