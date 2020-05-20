const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://localhost`;

module.exports = {
  getAllReviews(cb){
    MongoClient .connect(url, (err,client) =>{
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
  }
}