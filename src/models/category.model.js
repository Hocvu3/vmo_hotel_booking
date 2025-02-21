const Room = require('./room.model');
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

//Relationship
Category.hasMany(Room);
Room.belongsTo(Category);

module.exports = Category;
