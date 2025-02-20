const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const Room = sequelize.define(
  'room',
  {
    id: {
      type: DataTypes.UUID, //uuid as id
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    category_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    hotel_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, //Auto create Created_at and Updated_at
  }
);

module.exports = Room;
