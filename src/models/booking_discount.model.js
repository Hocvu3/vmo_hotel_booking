const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const Booking_Discount = sequelize.define(
  'booking_discount',
  {
    id: {
      type: DataTypes.UUID, //Auto increase id
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    booking_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    discount_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Booking_Discount;
