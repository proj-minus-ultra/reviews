const router = require('express').Router();
const controller = require('./controller.js');

router.route('/reviews')
  .get(controller.getAll)
  .delete(controller.delete)

router.route('/reviews/rating/:id')
  .get(controller.getRatings)

router.route('/reviewspost')
  .post(controller.post)

router.route('/reviews/:id')
  .get(controller.getOne)

module.exports = router