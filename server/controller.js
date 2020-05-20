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
  },
  post: (req, res) =>{
    database.postReview(req, (err, result) =>{
      if(err) {
        console.log('Error Adding Review:', err);
        res.status(404).send(err);
      } else {
        res.status(201).send('Added Successfully');
      }
    })
  }

}

module.exports = controller;