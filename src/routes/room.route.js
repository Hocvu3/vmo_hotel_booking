const express = require('express');
const roomRouter = express.Router();
const roomController = require('../controllers/room.controller');
roomRouter.route('/').get(roomController.getRooms).post(roomController.addRoom);

roomRouter
  .route('/id')
  .get(roomController.getRoom)
  .patch(roomController.updateRoom)
  .delete(roomController.deleteRoom);

module.exports = roomRouter;
