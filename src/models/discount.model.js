const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

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

module.exports = Discount;
