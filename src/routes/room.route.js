const express = require('express');
const roomRouter = express.Router();

roomRouter.route('/').get().post();

roomRouter.route('/id').get().patch().delete();

module.exports = roomRouter;
