const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017/reviews`;
//pretty much my schmea
class review{
  constructor(rating, title, review, recommendation, nickname, email, age, bodyType, location, wearTo, likes, dislikes) {
    this.id = db.sdc.find().Count()+1;
    this.rating = rating;
    this.title = title;
    this.review = review;
    this.recommendation = recommendation;
    this.nickname = nickname;
    this.email = email;
    this.age = age;
    this.bodyType = bodyType;
    this.location = location;
    this.wearTo = wearTo
    this.likes = likes;
    this.dislikes = this.dislikes;
    this.created_at = new Date();
  }
}




