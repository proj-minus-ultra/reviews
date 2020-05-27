const db = require('./index.js');

module.exports = {

  getSomeReviews(req,cb){
    //rating username title review locat likes dislikes recom
    let query = `SELECT rev_Id,rating,title,review,recommendation,nickname,locat,likes,dislikes FROM reviews WHERE rev_Id = ${req.rev_Id};`;

    db.query(query)
      .then((results)=>{
        cb(null, results.rows);
      })
      .catch((err)=>{
        cb(err);
        console.log('ERROR Getting Some Reviews...',err);
      })
  },
  postReview(req, cb){

    let query = `INSERT INTO reviews(rev_id,rating,title,review,recommendation,nickname,email,age,bodyType,locat,wearTo,likes,dislikes) Values(${req.rev_Id},${req.rating},'${req.title}','${req.review}',${req.recommendation}, '${req.nickname}', '${req.email}','${req.age}','${req.bodyType}', '${req.locatation}','${req.wearTo}','${req.ikes}','${req.dislikes}');`;

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