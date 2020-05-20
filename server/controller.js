const  database = require('../database/dbhelpers');

const controller = {
  getAll: (req, res) =>{
    database.getAllReviews((err,results) =>{
      if(err) {
       console.log('Error Getting All Reviews:',err);
       res.status(404).send(err);
      } else {
        console.log('Got All Reviews');
        res.set('Cache-Control', 'max-age=15536000').status(200).send(results);
      }
    })
  }

}

module.exports = controller;