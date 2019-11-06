const mongodb = require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/api';
mongodb.connect(url,(err,db)=>{
    if (err) throw err;
    let query ={post:'go apps'};
    let query1 ={name:/^z/}

    db.collection('post').find(query).toArray( (err,result)=>{
    if (err) throw err;
    console.log(result);
    
    db.close()
    })
   
})