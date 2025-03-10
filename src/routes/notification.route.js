const express = require('express');
const expressRouter = express.Router();
const notificationController = require('../controllers/notification.controller');

expressRouter
  .post('/save-token', notificationController.saveUserToken)
  .post('/send-notification', notificationController.sendNotification);

module.exports = expressRouter;
