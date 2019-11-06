const mongodb = require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/api';
mongodb.connect(url,(err,db)=>{
    if (err) throw err;
    console.log("run db");
    var info = {name:'ali',data:'2019/5/4 (10:29)',post :"yhb jhink"}
    db.collection('post').insertOne(info, (err,result)=>{
    if (err) throw err;
    console.log("run create Collection");
    
    db.close()
    })
   
})