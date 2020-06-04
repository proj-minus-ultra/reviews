import router from 'express'.Router();
import controller from './controller.js';

//app only needs post and get, but i builts them for practice
router.route('/reviews/:rev_Id')
  .get(controller.getSomeReviews)
  .post(controller.post)
  .delete(controller.delete)
  .put(controller.update)

  export default router