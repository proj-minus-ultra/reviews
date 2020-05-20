const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost`;


module.exports = {
  getAllReviews(cb){
    Mongo.connect(url, { useUnifiedTopology: true }, (err,client) =>{
      if(err){
        console.log(err);
        cb(err);
      } else {
       const db = client.db('reviews')
       const collection = db.collection('sdc');

       collection.find().toArray((err,results) =>{
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
    Mongo.connect(url, { useUnifiedTopology: true }, (err, client) =>{
      if (err) {
        cb(err);
      } else {
        const db = client.db('reviews')
        const collection = db.collection('sdc');

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
  },
  getRatings(req, cb) {
    Mongo.connect(url, { useUnifiedTopology: true }, (err,client) =>{
      if(err) {
        cb(err);
      } else {
        const db = client.db('reviews')
        const collection = db.collection('sdc');

        let toFind = req.params
        console.log('To Find:', toFind);
        collection.find(toFind).toArray((err, results) =>{
          if(err) {
            cb(err);
          } else {
            console.log(results)
            cb(null,results);
          }
        })

      }
    })
  }
}