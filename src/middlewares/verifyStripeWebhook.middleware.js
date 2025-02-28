const env = require('../config/env');
const stripe = require('stripe')(env.STRIPE_SECRET_KEY);

const verifyStripeWebhook = (req, res, next) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = env.WEBHOOK_SECRET;

  try {
    req.event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    next();
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
};

module.exports = verifyStripeWebhook;
