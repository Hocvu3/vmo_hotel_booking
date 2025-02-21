const { rawListeners } = require('../../app');
const sequelize = require('../config/db');
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

module.exports = Currency;
