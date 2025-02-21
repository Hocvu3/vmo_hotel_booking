const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');
const Booking_Service = require('./booking_service.model');
const Booking_Discount = require('./booking_discount.model');
const Booking = sequelize.define(
  'booking',
  {
    id: {
      type: DataTypes.UUID, //Auto increment
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    room_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    booking_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrival_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    departure_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// Relationship
Booking.hasOne(Booking_Discount), Booking_Discount.belongsTo(Booking);

Booking.hasMany(Booking_Service);
Booking_Service.belongsTo(Booking);

module.exports = Booking;
