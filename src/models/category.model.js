const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const Category = sequelize.define(
  'category',
  {
    id: {
      type: DataTypes.UUID, // Auto increase ID
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Category;
