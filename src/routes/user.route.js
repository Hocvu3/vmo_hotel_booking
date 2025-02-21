const express = require('express');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const { validateLogin } = require('../validators/auth.validator');
const isProtected = require('../middlewares/auth.middleware');
const restrictedTo = require('../middlewares/role.middleware');
const userRouter = express.Router();

// Auth
userRouter.post('/login', validateLogin, authController.login);
userRouter.post('/logout', authController.logout);

userRouter
  .route('/')
  .get(userController.getUsers)
  .post(userController.addUsers);

userRouter
  .route('/:id')
  .get(isProtected, restrictedTo('admin'), userController.getUser)
  .patch(isProtected, userController.updateUser)
  .delete(isProtected, userController.deleteUser);

module.exports = userRouter;
