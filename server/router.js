import express from 'express';
import controller from './controller.js';

const router = express.Router();
//app only needs post and get, but i builts them for practice
router.route('/reviews/:rev_Id')
  .get(controller.getSomeReviews)
  .post(controller.post)
  .delete(controller.delete)
  .put(controller.update)

  export default router