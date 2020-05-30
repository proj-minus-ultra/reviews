const faker = require('faker');

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
  'Amazing!',
  'Suberb',
  'This sucks but I still like it',
  'How to wear a mask?',
  'Google how to leave a review on a lululemon products',
  'You Have to Get This'
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
      'Berlin',
      'Ca',
      'Naboo',
      'Coruscant',
      'The Moon',
      'Mars',
      'San Diego,Ca',

    ];
  let wearTo = ['practiceYoga', 'dance', 'cycle', 'run', 'wearCasually'];
  let rating = [5, 4, 3, 2, 1];

module.exports = {
  createReviews(index){
    let mockProduct = {}
    let constraint = Math.floor(Math.random() * 3) + 1;

    mockProduct.reviews = [];

    for(let i = 0; i < 1; i++){

      let review = {};
      review.rev_Id = index;
      review.rating =  rating[Math.floor(Math.random() * rating.length)];
      review.title = reviewTitle[Math.floor(Math.random() * reviewTitle.length)];
      review.review = faker.lorem.words();
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
  }
}


