const env = require('../config/env');
const { Payment } = require('../models/db');
const handleWebhook = async (req, res) => {
  const event = req.event;

  switch (event.type) {
    case 'checkout.session.completed':
      await handleCheckoutSessionCompleted(event.data.object);
      break;

    case 'checkout.session.expired':
      await handleCheckoutSessionExpired(event.data.object);
      break;

    case 'charge.refunded':
      await handleChargeRefunded(event.data.object);
      break;

    default:
      console.log(`Unhandled Event : ${event.type}`);
  }
  res.json({ received: true });
};

// Handle completed session
async function handleCheckoutSessionCompleted(session) {
  try {
    await Payment.update(
      {
        status: 'Completed',
        transaction_id: session.payment_intent, // Update payment_intent instead of session id
      },
      {
        where: { transaction_id: session.id },
      }
    );
  } catch (err) {
    console.log('Error', err.message);
  }
}

// Handle expired session
async function handleCheckoutSessionExpired(session) {
  try {
    await Payment.update(
      {
        status: 'Expired',
      },
      {
        where: { transaction_id: session.payment_intent },
      }
    );
  } catch (err) {
    console.log('Error', err.message);
  }
}

//Handle charge refund
async function handleChargeRefunded(charge) {
  try {
    const paymentIntend = await Payment.findOne({
      where: { transaction_id: charge.payment_intent },
    });
    if (!paymentIntend) {
      console.log(
        `Error: Payment record not found for payment_intent: ${charge.payment_intent}`
      );
      return;
    }
    await Payment.update(
      { status: 'Refunded' },
      { where: { transaction_id: charge.payment_intent } }
    );
  } catch (err) {
    console.log('Error', err.message);
  }
}
module.exports = { handleWebhook };
