const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

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

module.exports = Booking;
