const database = require('../database/postgres/dbhelpers');

const controller = {
  post: (req, res) =>{
    console.log('From Controller:',req.body);
    database.postReview(req.body, (err, result) =>{
      if(err) {
        console.log('Error Adding Review:', err);
        res.status(404).send(err);
      } else {
        res.status(201).send('Added Successfully');
      }
    })
  },
  getSomeReviews: (req, res) =>{
    database.getSomeReviews(req.params, (err,result) =>{
      if(err){
        res.status(404).send(err);
      } else {
        //should cached it for around 3 months ~
        res.set('Cache-Control', 'max-age=7536000').status(202).send(result);
      }
    })
  },
  delete: (req,res) =>{
    database.deleteReview(req, (err, result) =>{
      if(err) {
        res.status(404).send(err);
      } else {
        res.status(203).send('Deleted Successfully');
      }
    })
  },
  update: (req,res) =>{

  }

}

module.exports = controller;