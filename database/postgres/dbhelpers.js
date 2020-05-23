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
  postReview(req, cb){

    let query = `INSERT INTO reviews(rev_id,rating,title,review,recommendation,nickname,email,age,bodyType,locat,wearTo,likes,dislikes) Values(${req.body.rev_Id},${req.body.rating},'${req.body.title}','${req.body.review}',${req.body.recommendation}, '${req.body.nickname}', '${req.body.email}','${req.body.age}','${req.body.bodyType}', '${req.body.locat}','${req.body.wearTo}','${req.body.likes}','${req.body.dislikes}');`;

    db.query(query)
      .then((results)=>{
        cb(null, results);
      })
      .catch((err)=>{
        cb(err);
        console.log('ERROR Saving Review To Database...\n',err);
      })
  },
  delete(req,cb){

  },
  update(req,cb){

  }

}