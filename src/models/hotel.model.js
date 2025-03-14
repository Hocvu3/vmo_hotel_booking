const Room = require('./room.model');
const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');
const Review = require('./review.model');
const Hotel = sequelize.define(
  'hotel',
  {
    id: {
      type: DataTypes.UUID,
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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200],
      },
    },
    postcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// Relationship
Hotel.hasMany(Room, { foreignKey: 'hotel_id', onDelete: 'CASCADE' });
Room.belongsTo(Hotel, { foreignKey: 'hotel_id' });

Hotel.hasMany(Review, { foreignKey: 'hotel_id', onDelete: 'CASCADE' });
Review.belongsTo(Hotel);

module.exports = Hotel;
