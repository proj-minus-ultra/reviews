const router = require('express').Router();
const controller = require('./controller.js');

router.route('/reviews')
  .get(controller.getAll)

router.route('/reviews/rating/:id')
  .get(controller.getRatings)

router.route('/reviewspost')
  .post(controller.post);

module.exports = router