const handleWebhook = async (req, res) => {
  const event = req.event;

  switch (event.type) {
    case 'checkout.session.completed':
      console.log('Payment Succeeded!', event.data.object);
      break;

    case 'checkout.session.expired':
      console.log('Checkout session expired!', event.data.object);
      break;

    case 'charge.refunded':
      console.log('Refund Succeeded!', event.data.object);
      break;

    case 'charge.succeeded':
      console.log('Payment Succeeded, Money Gained!', event.data.object);
      break;

    default:
      console.log(`Unhandled Event : ${event.type}`);
  }

  res.json({ received: true });
};

module.exports = { handleWebhook };
