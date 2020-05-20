const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost`;

module.exports = {
  getAllReviews(cb){
    Mongo.connect(url, { useUnifiedTopology: true }, (err,client) =>{
      if(err){
        console.log(err);
        cb(err);
      } else {
        console.log('Connected To DB');
        let db = client.db('reviews')
        let allReviews = db.collection('sdc');

        allReviews.find().toArray((err,results) =>{
          if(err) {
            cb(err);
          } else {
            cb(null,results);
          }
        })
      }
    })
  },
  postReview(req, cb) {
    Mongo.connect(url, (err, client) =>{
      if (err) {
        cb(err);
      } else {
        let db = client.db('reviews');
        let collection = db.collection('sdc');
        collection.insertOne(req.body, (err, results) =>{
          if(err) {
            console.log('Error Posting');
            cb(err);
          } else {
            cb(null, results);
          }
        })
      }
    })
  }
}