const router = require('express').Router();
const controller = require('./controller.js');

router.route('/reviews')
  .delete(controller.delete)


router.route('/reviewspost')
  .post(controller.post)

router.route('/reviews/:rev_Id')
  .get(controller.getSomeReviews)
  .post(controller.post)

module.exports = router