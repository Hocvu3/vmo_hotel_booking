const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const Review = sequelize.define(
  'review',
  {
    id: {
      type: DataTypes.UUID, //Auto increase id
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    hotel_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 1,
      validate: {
        min: 0,
        max: 5,
      },
    },
    comment: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Review;
