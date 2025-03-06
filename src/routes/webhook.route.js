const express = require('express');
const { handleWebhook } = require('../controllers/webhook.controller');
const verifyStripeWebhook = require('../middlewares/verifyStripeWebhook.middleware');
const webhookRouter = express.Router();

webhookRouter.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  verifyStripeWebhook,
  handleWebhook
);

module.exports = webhookRouter;
