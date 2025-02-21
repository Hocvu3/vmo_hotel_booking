const env = require('../config/env');
const { Room } = require('../models/db');
const bookingRouter = require('../routes/booking.route');
const stripe = require('stripe')(env.Secret_key);

async function createPaymentIntent(req, res) {
  // 1) Get the currently booked tour
  const room = await Room.findByPk(req.params.id);
  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment', // Specify mode as 'payment' for a one-time payment
    // success_url: `${req.protocol}://${req.get('host')}/?tour=${req.params.id}&user=${req.user.id}&price=${tour.price}`,
    success_url: `${req.protocol}://${req.get('host')}`,
    cancel_url: `${req.protocol}://${req.get('host')}/room/${room.id}`,
    // customer_email: req.user.email,
    client_reference_id: req.params.id,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${room.name} Room`,
            description: room.description,
            // images: [`https://www.natours.dev/img/tours/${tour.imageCover}`],
          },
          //   unit_amount: tour.price * 100, // Amount in cents
          unit_amount: 100, // Amount in cents
        },
        quantity: 1,
      },
    ],
  });
  // 3) Create session as response
  res.status(200).json({
    status: 'success',
    session,
  });
}

module.exports = { createPaymentIntent };
