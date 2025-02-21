const sequelize = require('../config/db');
const Booking = require('./booking.model');
const Currency = require('./currency.model');
const { Sequelize, DataTypes } = require('sequelize');
const Payment = sequelize.define(
  'payment',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    booking_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    currency_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
    },
    transaction_id: {
      type: DataTypes.INTEGER,
    },
    total_price: {
      type: DataTypes.FLOAT,
    },
  },
  {
    timestamps: true,
  }
);

// Relationship
Payment.hasOne(Booking, { onDelete: 'CASCADE' });
Booking.belongsTo(Payment);

Payment.hasOne(Currency);
Currency.belongsTo(Payment);

module.exports = Payment;
