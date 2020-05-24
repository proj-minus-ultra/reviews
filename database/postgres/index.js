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