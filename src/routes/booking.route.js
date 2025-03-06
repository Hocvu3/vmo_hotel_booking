const express = require('express');
const bookingController = require('../controllers/booking.controller');
const bookingRouter = express.Router();

bookingRouter.post('/', bookingController.createBooking);
bookingRouter.get('/:bookingId', bookingController.getBooking);

module.exports = bookingRouter;
