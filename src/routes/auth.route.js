const express = require('express');
const authController = require('../controllers/auth.controller');
const { validateLogin } = require('../validators/auth.validator');

const authRouter = express.Router();

authRouter
  .post('/login', validateLogin, authController.login)
  .post('/logout', authController.logout);

module.exports = authRouter;
