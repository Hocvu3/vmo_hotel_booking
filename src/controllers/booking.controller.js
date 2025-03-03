const env = require('../config/env');
const { Room, Price, Booking, Booking_Service } = require('../models/db');
const apiResponse = require('../utils/apiResponse');

const createBooking = async (req, res) => {
  const { room_id, user_id, check_in, check_out, number_of_guest, service_id } =
    req.body;
  try {
    const booking = await Booking.create({
      userId: user_id,
      roomId: room_id,
      booking_date: new Date(),
      arrival_date: check_in,
      departure_date: check_out,
      status: 'Pending',
      // We can create number guest to store number_of_guest
    });
    if (service_id && service_id.length > 0) {
      const bookingServicePromises = service_id.map(async (serviceId) => {
        return Booking_Service.create({
          bookingId: booking.id,
          serviceId: serviceId,
        });
      });
      await Promise.all(bookingServicePromises);
    }
    apiResponse(res, 201, 'success', { bookingId: booking.id });
  } catch (err) {
    apiResponse(res, 500, 'Server Error', { error: err.message });
  }
};

module.exports = { createBooking };
