const express = require('express');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const { isLoggedIn, isProtected } = require('../middlewares/auth.middleware');
const restrictedTo = require('../middlewares/role.middleware');

const userRouter = express.Router();

userRouter.route('/').get(userController.index).post(userController.store);

userRouter
  .route('/:id')
  .get(isProtected, restrictedTo('admin'), userController.show)
  .patch(userController.update)
  .delete(userController.destroy);

module.exports = userRouter;
