const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');
const Price = sequelize.define(
  'price',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    object_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    object_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Price;
