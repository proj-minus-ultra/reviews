const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost`;
//db.reviews.createIndex({rev_Id: -1})

let indexer = ()=>{
  Mongo.connect(url,{ useUnifiedTopology: true }, (err,client)=>{
    if(err) throw err;

    const db = client.db('sdc')
    const collection = db.collection('reviews');
    console.log('Indexing...');
    collection.createIndex({rev_Id: -1},(err,results)=>{
      if(err) throw err;
      console.log('Indexed Database!!!!');
      client.close();
    })
  })
};

indexer();