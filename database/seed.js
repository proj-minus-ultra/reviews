const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017/reviews`;
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();
const createReview = require('../createReviews.js').createReviews;

//negative one so first set of reviews has id 0
let id = -1;

let csv = (writer, cb) =>{
  writer.pipe(fs.createWriteStream('sdc.csv'));
  console.log('Generating CSV...');
  let i = 10000000;
   let write=()=> {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      console.log(i);
      let review = createReview(id);
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
  });







