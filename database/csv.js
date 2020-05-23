const csv = require('./seed.js').csv;
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

csv(writer,10000000, ()=>{
  writer.end();
  console.log(`Successfully Generated CSV ! Time to Insert into Database`);
});
