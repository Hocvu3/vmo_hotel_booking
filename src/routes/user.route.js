const express = require('express');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const { validateLogin } = require('../validators/auth.validator');
const userRouter = express.Router();

userRouter.post('/login', validateLogin, authController.login);
userRouter.post('/logout', authController.logout);

userRouter.get('/add-user', userController.addUsers);
userRouter.get('/get-user', userController.getUsers);
userRouter.delete('/delete-user/:id', userController.deleteUser);

module.exports = userRouter;
