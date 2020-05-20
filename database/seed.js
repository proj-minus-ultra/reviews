const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017/reviews`;

Mongo.connect(url, { useUnifiedTopology: true }, (err, client) =>{

  if (err) {
    console.log(err);
  } else {

    let db = client.db('reviews');
    let collection = db.collection('sdc');

    let counter = -1;


    //pretty much my schmea
    class review{
      constructor(id, rating, title, review, recommendation, nickname, email, age, bodyType, location, wearTo, likes, dislikes) {
        this.id = id;
        this.rating = rating;
        this.title = title;
        this.review = review;
        this.recommendation = recommendation;
        this.nickname = nickname;
        this.email = email;
        this.age = age;
        this.bodyType = bodyType;
        this.location = location;
        this.wearTo = wearTo;
        this.likes = likes;
        this.dislikes = this.dislikes;
        this.created_at = new Date();
      }
    }

    let foo = new review(counter + 1,4, "I love everything", "This is an amazing product and you should buy it", true, "boppity", "boppity@gmail.com", 44, "Thick", "Ca", "Every Day", "Color", "Texture");


    collection.insertOne(foo, (err, results) =>{
      if(err) {
        console.log('Error Posting', err);

      } else {
        console.log('Successfully Seeded')
        client.close();
      }
    })
  }
})




