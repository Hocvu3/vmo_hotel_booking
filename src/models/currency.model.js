const sequelize = require('../config/db');
const Payment = require('./payment.model');
const { Sequelize, DataTypes } = require('sequelize');

const Currency = sequelize.define(
  'currency',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    symbol: {
      type: DataTypes.STRING,
    },
    rate: {
      type: DataTypes.FLOAT,
    },
  },
  {
    timestamps: true,
  }
);

// Relation
Currency.hasOne(Payment);
Payment.belongsTo(Currency);

module.exports = Currency;
