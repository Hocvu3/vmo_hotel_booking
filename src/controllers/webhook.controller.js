const handleWebhook = async (req, res) => {
  const event = req.event;

  switch (event.type) {
    case 'checkout.session.completed':
      console.log('Payment Succeeded!', event.data.object);
      break;

    case 'payment_intent.succeeded':
      console.log('Payment Confirmed!', event.data.object);
      break;

    case 'payment_intent.payment_failed':
      console.log('Payment Failed!', event.data.object);
      break;

    case 'charge.refunded':
      console.log('Refund Succeeded!', event.data.object);
      break;

    case 'charge.succeeded':
      console.log('Payment Succeeded, Money Gained!', event.data.object);
      break;

    default:
      console.log(`ℹ️ Unhandled Event : ${event.type}`);
  }

  res.json({ received: true });
};

module.exports = { handleWebhook };
