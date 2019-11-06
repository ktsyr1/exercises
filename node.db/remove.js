const mongodb = require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/api';
mongodb.connect(url,(err,db)=>{
    if (err) throw err;
    let query ={name:'ali'};
    let query1 ={name:-1};

    db.collection('post').remove(query, (err,res)=>{
    if (err) throw err;
    console.log(res.result.n +'deleted');
    
    db.close()
    })
   
})