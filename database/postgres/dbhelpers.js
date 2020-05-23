const db = require('./index.js');

module.exports = {
  getAllReviews(cb){

  },
  getOneReview(req,cb){

  },
  getSomeReviews(req,cb){
    //rating username title review locat likes dislikes recom
    let query = `SELECT rev_Id,rating,title,review,recommendation,nickname,locat,likes,dislikes FROM reviews WHERE rev_Id = ${req.body.rev_Id};`;
    db.query(query)
      .then((results)=>{
        cb(null, results);
      })
      .catch((err)=>{
        cb(err);
        console.log('ERROR Getting Many Reviews...',err);
      })
  },
  post(req, cb){

  },
  delete(req,cb){

  },
  update(req,cb){

  }

}