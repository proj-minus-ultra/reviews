const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017/reviews`;
//pretty much my schmea
class review{
  constructor(rating, title, review, recommendation, nickname, email, likes, dislikes) {
    this.rating = rating;
    this.title = title;
    this.review = review;
    this.recommendation = recommendation;
    this.nickname = nickname;
    this.email = email;
    this.location = location;
    this.likes = likes;
    this.dislikes = this.dislikes;
    this.created_at = new Date();
  }
}




