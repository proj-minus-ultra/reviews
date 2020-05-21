const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017/reviews`;
const faker = require('faker')


let createProduct = (index) =>{
  //should generate random number between 0 and 20
  let product = {};
  let imageNumbers = [0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,];
  let randoImageNumber = imageNumbers[Math.floor(Math.random() * imageNumbers.length)];
  product.productimage = `https://sdc-reviews.s3-us-west-2.amazonaws.com/sdc/${randoImageNumber}.jpg`
  product.id = index;
  product.title = faker.commerce.productName();
  product.reviews = [];
  //random amount of reviews for each product
  let contraint = Math.floor(Math.random() * 25) + 5;

  for(let i = 0; i < contraint; i++){
    let rating = [5, 4, 3, 2, 1];
    let adjective = ['Stretchy', 'Soft', 'High-Rise', 'ABC', 'Warpstreme', 'tight', 'Comy'];
    let noun = ['Jogger','Sweats','Hoodie','Bra','Tight','Shirt','T-Shirt','Coat','Jacket'];
    let reviewTitle = [
      'Wicked',
      'Awesome',
      'Terrible',
      'Mehh',
      'Fits',
      'Thank you!',
      'Perfect',
      'Are a must!',
      'Overpriced',
      'Super Comfy',
      'Quality that can be felt',
      'A little dissapointed',
      'Amazing!'
    ];

    let pronouns = ['I', 'She', 'He', 'It', 'They', 'Them'];
    let connectingWords = [
      "didn't",
      "can't",
      "wouldn't",
      "isn't",
      'especially',
      'loved',
      'hated',
      'enjoyed',
      'damaged',
      'begin',
      'appear',
      'climb',
      'danced',
      'eat',
      'find',
      'hesitated',
      'lay',
      'might',
      'neglect',
      'received'
    ];

    let moreWords = [
      'are',
      'super',
      'have',
      'been',
      'everyday',
      'color',
      'different',
      'office',
      'gym',
      'rock climbing',
      'horrible',
      'second pair',
      'doing well',
      'well done',
      'will buy more',
      'other',
      'picture',
      'traveling',
      'awesome',
      'freedom',
      'sleeping'
    ];

    let evenMoreWords = [
      'saggy',
      'comfy',
      'never washed',
      'had a problem',
      'gift',
      'regularly experience',
      'no room down there',
      'brother',
      'great gift'
    ];

    let recommendation = [true, false];

    let age = [
      'noAge',
      'under18',
      'between1824',
      'between2534',
      'between3544',
      'between4554',
      'between5565',
      'over65'
    ];
    let bodyTypes = [
      'athletic',
      'curvy',
      'lean',
      'muscular',
      'petite',
      'slim',
      'solid'
    ];

    let location = [
      'Los Angeles',
      'London',
      'Texas',
      'Hawaii',
      'Japan',
      'Seattle',
      'Kyoto',
      'Portland',
      'Italy',
      'France',
      'Denver',
      'New York',
      'SGV',
      'Irvine',
      'Hong Kong',
      'Rome',
      'Spain',
      'Berlin'
    ];

    let wearTo = ['practiceYoga', 'dance', 'cycle', 'run', 'wearCasually'];
    let randomLike = () =>{
      let adj = adjective[Math.floor(Math.random() * adjective.length)];

    };
    product.reviews.push({
      rating: rating[Math.floor(Math.random() * rating.length)],
      title: reviewTitle[Math.floor(Math.random() * reviewTitle.length)],
      review: faker.lorem.paragraph(),
      recommendation: recommendation[Math.floor(Math.random() * recommendation.length)],
      nickname: faker.internet.userName(),
      email: faker.internet.email(),
      age: age[Math.floor(Math.random() * age.length)],
      bodyType: bodyTypes[Math.floor(Math.random() * bodyTypes.length)],
      location: location[Math.floor(Math.random() * location.length)],
      wearTo: wearTo[Math.floor(Math.random() * wearTo.length)],
      likes : faker.lorem.words(),
      dislikes: faker.lorem.words(),
    })

  }
  return product;
};

let data = () => {
  let arr = [];
  for (let i = 0; i < 5000; i++) {
    console.log(i);
    arr.push(createProduct(i));
  }
  return arr;
};

let toInsert = data();

let seed = () =>{
  Mongo.connect(url, { useUnifiedTopology: true }, (err, client) =>{

    if (err) {
      console.log(err);
    } else {

      let db = client.db('reviews');
      let collection = db.collection('sdc');

      toInsert.map((item) =>{
        collection.insertOne(item, (err, results) =>{
          if(err) {
            console.log('Error!:', err);
          } else {
            console.log('SEEDED!');
          }
        })
      })


    }
  });
};

seed();