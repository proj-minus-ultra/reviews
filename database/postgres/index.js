import { Pool } from ('pg');
import ubuntu from ('./config.js');

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



