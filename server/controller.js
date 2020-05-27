const database = require('../database/postgres/dbhelpers');

const controller = {
  post: (req, res) =>{
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
    database.delete(req, (err, result) =>{
      if(err) {
        res.status(404).send(err);
      } else {
        console.log(`Successfully Deleted ${req.params.rev_Id}`);
        res.status(203).send(`Successfully Deleted ${req.params.rev_Id} `);
      }
    })
  },
  update: (req,res) =>{
    database.update(req, (err,result)=>{
      if (err) {
        res.status(404).send(err);
      } else {
        console.log('Successfully Updated!');
        res.status(204).send(result);
      }
    })

  }

}

module.exports = controller;