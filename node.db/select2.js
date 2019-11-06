const mongodb = require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/api';
mongodb.connect(url,(err,db)=>{
    if (err) throw err;
    let query ={name:1};
    let query1 ={name:-1};

    db.collection('post').find().sort(query).toArray( (err,result)=>{
    if (err) throw err;
    console.log(result);
    
    db.close()
    })
   
})