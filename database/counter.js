const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost`;

let countDb = () =>{
  Mongo.connect(url,{ useUnifiedTopology: true }, (err,client) =>{
    if(err){
      console.log(err);
    }

    const db = client.db('sdc')
    const collection = db.collection('reviews');
    collection.estimatedDocumentCount((err,results)=>{
      if(err) throw err;
      console.log(`Database has ${results} documents`);
      client.close();
    })
  })
};

countDb();