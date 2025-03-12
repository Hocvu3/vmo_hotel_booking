const express = require('express');
const viewController = require('../controllers/view.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { validateRoomQuery } = require('../validators/query.validator');
const { errorMiddleware } = require('../middlewares/error.middleware');
const viewRouter = express.Router();

viewRouter.get(
  '/',
  validateRoomQuery,
  errorMiddleware,
  authMiddleware.isLoggedIn,
  viewController.home
);
viewRouter.get('/login', authMiddleware.isLoggedIn, viewController.login);
viewRouter.get(
  '/room/:id',
  authMiddleware.isLoggedIn,
  viewController.roomDetail
);
viewRouter.get('/register', authMiddleware.isLoggedIn, viewController.register);
viewRouter.get(
  '/dashboard',
  authMiddleware.isLoggedIn,
  viewController.dashboard
);
viewRouter.get('/summary', authMiddleware.isLoggedIn, viewController.summary);

module.exports = viewRouter;
