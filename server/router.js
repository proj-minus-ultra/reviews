const router = require('express').Router();
const controller = require('./controller.js');

router.route('/reviews')
  .get(controller.getAll)
  .delete(controller.delete)

router.route('/reviews/rating/:id')


router.route('/reviewspost')
  .post(controller.post)

router.route('/reviews/:rev_Id')
  .get(controller.getSomeReviews)

module.exports = router