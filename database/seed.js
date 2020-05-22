const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017/reviews`;
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

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

    for(let i = 0; i < constraint; i++){

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

      //only way i could give a bunch of reviews the same id
      return mockProduct;
  };




//negative one so first set of reviews has id 0
let id = -1;

let csv = (writer, cb) =>{
  writer.pipe(fs.createWriteStream('sdc.csv'));
  console.log('Generating CSV...');
  let i = 4500000;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      console.log(id);
      let review = createReviews(id);
      review.reviews.map((rev)=>{
        if (i === 0) {
          writer.write(rev,cb);
        } else {
          // see if we should continue, or wait
          ok = writer.write(rev);
        }
      })
    } while (i > 0 && ok);
      if (i > 0) {
        // write some more once it drains
        writer.once('drain', write);
      }
    }
      write();
  };


  csv(writer, ()=>{
    writer.end();
    console.log(`Successfully Generated CSV ! Time to Insert into Database`);
    console.log('Inserting into Database...');
  });









