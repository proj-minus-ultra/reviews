//run using node --max-old-space-size=16000 database/old_seed.js
const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017/reviews`;
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const csvtojson = require("csvtojson");


let amount = 100;

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
let rating = [5, 4, 3, 2, 1];

let createReviews = (index)=>{
  let mockProduct = {}
  let constraint = Math.floor(Math.random() * 6);


  mockProduct.reviews = []

  for(let i = 0; i < 5; i++){

    let review = {};
    review.id = index;
    review.rating =  rating[Math.floor(Math.random() * rating.length)];
    review.title = reviewTitle[Math.floor(Math.random() * reviewTitle.length)];
    review.review = faker.lorem.paragraph();
    review.recommendation = recommendation[Math.floor(Math.random() * recommendation.length)];
    review.nickname = faker.internet.userName();
    review.email = faker.internet.email();
    review.age = age[Math.floor(Math.random() * age.length)];
    review.bodyType = bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
    review.location = location[Math.floor(Math.random() * location.length)];
    review.wearTo = wearTo[Math.floor(Math.random() * wearTo.length)];
    review.likes = faker.lorem.words();
    review.dislikes = faker.lorem.words();

    mockProduct.reviews.push(review);
  }

  //only way i could give a bunch of reviews th

    return mockProduct;

};




let csvGenerator = (cb) =>{
  console.log('To Seed:', amount);
  writer.pipe(fs.createWriteStream('sdc.csv'));
  console.log('Generating CSV!');
  for(let i = 0; i < amount; i++){
    let temp = createReviews(i);

    temp.reviews.map((item) =>{
      writer.write(item);
    })

  }

  console.log('CSV Generated! Seeding...');

  cb()
};

let amtAddedSoFar = 0;
let seed = () =>{
  console.log('Reading CSV...');
  csvtojson().fromFile("sdc.csv")
    .then((csvData) =>{
      Mongo.connect(url,{ useUnifiedTopology: true }, (err,client) =>{
        if(err){throw err;}
        let db = client.db('sdc');
        let collection = db.collection('reviews');
        console.log('Seeding Database...')

        collection.insertMany(csvData, (err, results) =>{
          if (err) {throw err;}
          amtAddedSoFar += results.insertedCount;
          console.log(`Total Seeded So Far:${amtAddedSoFar}`);
          if(amtAddedSoFar < amount){
            console.log('Not Enough Seeded, Seeding Again...');
            seed();
          } else {
            client.close();
            writer.end();
            console.log('Seeding Complete!');
            console.log('Amount Seeded:', amtAddedSoFar);
            console.log('Amount Target:',amount)
            console.log('Press control + c If the process is still running');
          }
        })
      })
    })
};



csvGenerator(seed);


