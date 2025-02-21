const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');
const Booking_Discount = require('./booking_discount.model');
const Discount = sequelize.define(
  'discount',
  {
    id: {
      type: DataTypes.UUID, //Auto increase id
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING,
    },
    discount_percentage: {
      type: DataTypes.FLOAT,
    },
    expiration_date: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
  }
);

// Relationship
Discount.hasMany(Booking_Discount);
Booking_Discount.belongsTo(Discount);

module.exports = Discount;
