const { Pool } = require('pg');
const ubuntu = require('./config.js');
//https://www.postgresqltutorial.com/postgresql-indexes/postgresql-create-index/
//simple guide to index a database
//change host to 'localhost', remove port, and possibly password for just local use
//if you cloned this, you need to change the password to whatever your password is
const client = new Pool({
  user: 'alex',
  host: ubuntu.host,
  database: 'sdc',
  port:'5432',
  password: ubuntu.password
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
    console.log('Indexed  on rev_Id successfully');
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
