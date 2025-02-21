const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const Service = sequelize.define(
  'service',
  {
    id: {
      type: DataTypes.UUID, //Auto increase id
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Service;
