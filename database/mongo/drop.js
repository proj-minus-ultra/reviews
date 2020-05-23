const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost`;

let drop = () =>{
  Mongo.connect(url,{ useUnifiedTopology: true }, (err,client) =>{
    if(err){
      console.log(err);
    }

    const db = client.db('sdc')

    db.dropDatabase((err,results)=>{
      if(err) throw err;
      console.log(`Database has been dropped`);
      client.close();
    })
  })
};

drop();