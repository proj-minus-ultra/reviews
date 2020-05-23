const { Client } = require('pg');

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