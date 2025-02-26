const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');
const Payment = sequelize.define(
  'payment',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    bookingId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    currencyId: {
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
      type: DataTypes.STRING,
    },
    total_price: {
      type: DataTypes.FLOAT,
    },
  },
  {
    timestamps: true,
  }
);

// Relation

module.exports = Payment;
