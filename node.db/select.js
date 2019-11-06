const mongodb = require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/api';
mongodb.connect(url,(err,db)=>{
    if (err) throw err;
    // db.collection('post').findOne({}, (err,result)=>s{

    db.collection('post').find({}).toArray( (err,result)=>{
    if (err) throw err;
    console.log(result);
    
    db.close()
    })
   
})