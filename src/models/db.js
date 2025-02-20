const { Sequelize } = require('sequelize');
const sequelize = require('../config/db');

// Import all models
const User = require('./user.model');
const Room = require('./room.model');
const Hotel = require('./hotel.model');
const Image = require('./image.model');
const Price = require('./price.model');
const Review = require('./review.model');
const Salary = require('./salary.model');
const Booking = require('./booking.model');
const Service = require('./service.model');
const Payment = require('./payment.model');
const Category = require('./category.model');
const Currency = require('./currency.model');
const Discount = require('./discount.model');
const Booking_Service = require('./booking_service.model');
const Booking_Discount = require('./booking_discount.model');

// Import associations file
const defineAssociations = require('./associations');

// Call association function
defineAssociations();

const db = {
  sequelize,
  User,
  Room,
  Hotel,
  Image,
  Price,
  Review,
  Salary,
  Booking,
  Service,
  Payment,
  Category,
  Currency,
  Discount,
  Booking_Service,
  Booking_Discount,
};

module.exports = db;
