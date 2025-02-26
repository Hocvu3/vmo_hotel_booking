const express = require('express');
const viewController = require('../controllers/view.controller');

const viewRouter = express.Router();

viewRouter.get('/', viewController.home);
viewRouter.get('/login', viewController.login);
viewRouter.get('/room/:id', viewController.roomDetail);
viewRouter.get('/register', viewController.register);
viewRouter.get('/dashboard', viewController.dashboard);

module.exports = viewRouter;
