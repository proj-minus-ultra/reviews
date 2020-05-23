const db = require('./index.js');
const createReview = require('../createReviews.js').createReviews;




let seed = () =>{
  for(let i = 1; i < 2;i++){
    let temp = createReview(i);
    temp.reviews.map((review)=>{
      console.log(i);
      let query = `INSERT INTO reviews(rev_id,rating,title,review,recommendation,nickname,email,age,bodyType,locat,wearTo,likes,dislikes) Values(${review.rev_Id},${review.rating},'${review.title}','${review.review}',${review.recommendation}, '${review.nickname}', '${review.email}','${review.age}','${review.bodyType}', '${review.locat}','${review.wearTo}','${review.likes}','${review.dislikes}');`;

      db.query(query)
        .catch((err)=>{
          console.log(err.stack);
        });
    })

  }
  console.log('Done Seeding!');
  db.end();
};

seed()

//seed this into the database by entering the following into the command line:
//psql -d sdc -U AlexB -c "COPY reviews(rev_id,rating,title,review,recommendation,nickname,email,age,bodyType,locat,wearTo,likes,dislikes) FROM '/Users/AlexB/Desktop/reviews_component/sdc.csv' delimiter ',' csv header ;"