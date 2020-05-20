const Mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

Mongo.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("reviews");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("sdc").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
