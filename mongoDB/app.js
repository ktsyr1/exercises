var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  db.collection('mongoclient_test').update({"app":"app mp4","os":"web","size":40})
  console.log("Connected correctly to server");

  db.close();
});