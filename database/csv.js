const csv = require('./seed.js').csv;
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

csv(writer, ()=>{
  writer.end();
  console.log(`Successfully Generated CSV ! Time to Insert into Database`);
});
