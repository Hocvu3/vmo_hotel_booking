const express = require('express');
const { createPaymentIntent } = require('../controllers/booking.controller');
const bookingRouter = express.Router();

bookingRouter.get('/:id', createPaymentIntent);

module.exports = bookingRouter;
