const env = require('../config/env');
const { Room, Price, Booking, Payment } = require('../models/db');
const stripe = require('stripe')(env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
  const { booking_id, total_amount } = req.body;
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [
        {
          model: Room,
        },
      ],
    });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    // Fix amount
    const fixedTotalAmount = parseFloat(total_amount).toFixed(2); // Parse to float first, then fix.
    const stripeAmount = Math.round(fixedTotalAmount * 100); // Stripe uses cents
    // Create Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${req.protocol}://${req.get('host')}/`,
      cancel_url: `${req.protocol}://${req.get('host')}/`,
      client_reference_id: req.params.id,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${booking.room.name} Room`,
              description: booking.room.description,
            },
            unit_amount: stripeAmount,
          },
          quantity: 1,
        },
      ],
    });
    // Store payment
    const payment = await Payment.create({
      bookingId: booking_id,
      currencyId: '26fec2aa-fd4a-400e-a5f6-f002d8d84eb6',
      payment_method: 'Stripe',
      status: 'Pending',
      transaction_id: session.id,
      total_price: total_amount,
    });
    res.status(200).json({ status: 'success', session });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const refundPayment = async (req, res) => {
  try {
    const { paymentIntentId } = req.body;
    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId,
    });
    res.json({ success: true, refund });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { refundPayment, createPaymentIntent };
