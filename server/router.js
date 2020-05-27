const router = require('express').Router();
const controller = require('./controller.js');

//app only needs post and get, but i builts them for practice
router.route('/reviews/:rev_Id')
  .get(controller.getSomeReviews)
  .post(controller.post)
  .delete(controller.delete)

module.exports = router