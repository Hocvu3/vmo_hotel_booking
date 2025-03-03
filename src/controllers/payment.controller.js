const env = require('../config/env');
const { Room, Price } = require('../models/db');
const stripe = require('stripe')(env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id, {
      include: [{ model: Price, as: 'price', attributes: ['amount'] }],
    });

    if (!room) return res.status(404).json({ message: 'Không tìm thấy phòng' });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${req.protocol}://${req.get('host')}/success`,
      cancel_url: `${req.protocol}://${req.get('host')}/room/${room.id}`,
      client_reference_id: req.params.id,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${room.name} Room`,
              description: room.description,
            },
            unit_amount: room.price.amount * 100,
          },
          quantity: 1,
        },
      ],
    });

    res.status(200).json({ status: 'success', session });
  } catch (err) {
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
