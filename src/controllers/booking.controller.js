const env = require('../config/env');
const {
  Room,
  Price,
  Booking,
  Booking_Service,
  Category,
  User,
  Service,
  Discount,
} = require('../models/db');
const apiResponse = require('../utils/apiResponse');
const { Sequelize, Op } = require('sequelize');

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

// Get booking detail
const getBooking = async (req, res) => {
  const { bookingId } = req.params;
  try {
    // Eager loading
    const booking = await Booking.findByPk(bookingId, {
      include: [
        { model: Room, include: [{ model: Category }, { model: Price }] },
        { model: User },
        {
          model: Booking_Service,
          include: [
            {
              model: Service,
              include: [
                {
                  model: Price,
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    });
    if (!booking) {
      return apiResponse(res, 404, 'Booking not found');
    }
    apiResponse(res, 200, 'success', { booking });
  } catch (err) {
    console.error(err);
    apiResponse(res, 500, 'Server Error', { error: err.message });
  }
};

const getDiscount = async (req, res) => {
  let discount_code = req.body.discount_code;
  try {
    const result = await Discount.findOne({
      where: {
        code: discount_code,
      },
    });

    if (result) {
      const expirationDate = new Date(
        result.expiration_date.getFullYear(),
        result.expiration_date.getMonth(),
        result.expiration_date.getDate()
      );
      const currentDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      );

      if (expirationDate >= currentDate) {
        apiResponse(res, 200, 'success', result);
      } else {
        apiResponse(res, 404, 'failed', { message: 'Discount code expired.' });
      }
    } else {
      apiResponse(res, 404, 'failed', { message: 'Discount code not found.' });
    }
  } catch (err) {
    console.error('Error fetching discount:', err);
    apiResponse(res, 500, 'Server error', { message: err.message });
  }
};

module.exports = { createBooking, getBooking, getDiscount };
