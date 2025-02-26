const express = require('express');
const roomRouter = express.Router();
const roomController = require('../controllers/room.controller');

roomRouter.route('/').get(roomController.index).post(roomController.store);

roomRouter
  .route('/id')
  .get(roomController.show)
  .patch(roomController.update)
  .delete(roomController.destroy);

module.exports = roomRouter;
