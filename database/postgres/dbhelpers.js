const db = require('./index.js');

module.exports = {
  getAllReviews(cb){

  },
  getOneReview(req,cb){

  },
  getSomeReviews(req,cb){
    let query = `SELECT * FROM reviews WHERE rev_Id = ${req.body.rev_Id};`;
    db.query(query)
      .then((results)=>{
        cb(null, results);
      })
      .catch((err)=>{
        cb(err);
        console.log('ERROR Getting Many Reviews...');
      })
  },
  post(req, cb){

  },
  delete(req,cb){

  },
  update(req,cb){

  }

}