var mongodb=require("mongoose")

mongodb.connect("mongodb://localhost:27017/test")

const con=mongodb.connection
con.on("error",console.error.bind(console, '连接数据库失败'));
    con.once('open',()=>{
        // console.log("连接成功")
})
