const { Client } = require('pg');
//https://www.postgresqltutorial.com/postgresql-indexes/postgresql-create-index/
//simple guide to index a database
const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'sdc'
});

client.connect()
  .then((err)=>{
    console.log('Connected To Database Successfully');
  })
  .catch((err)=>{
    throw err;
  });

  module.exports = client;



  /*
  const db = require('./index.js');
//https://www.postgresqltutorial.com/postgresql-indexes/postgresql-create-index/
//good little guide on how to index a psql databse

let indexer = () =>{
  let query = "CREATE INDEX idx_rev_Id ON reviews(rev_Id);";
  db.query(query)
  .then(()=>{
    console.log('Indexed revies on rev_Id successfully');
  })
  .then(()=>{
    db.end();
  })
  .catch((err)=>{
    throw err;
  })
};

indexer();
  */
