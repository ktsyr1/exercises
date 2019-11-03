const mongodb = require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/api';
mongodb.connect(url,(err,db)=>{
    if (err) throw err;
    console.log("run db");
    db.createCollection('txt',(err,result)=>{
    if (err) throw err;
    console.log("run create Collection");
    db.close()
    })
   
})