const express = require('express');
const validateRefund = require('../middlewares/validateRefund.middleware');
const {
  createPaymentIntent,
  refundPayment,
} = require('../controllers/payment.controller');

const paymentRouter = express.Router();

paymentRouter.post('/create-session/:id', createPaymentIntent);
paymentRouter.post('/refund', validateRefund, refundPayment);

module.exports = paymentRouter;
