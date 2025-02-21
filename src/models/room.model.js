const Price = require('./price.model');
const Image = require('./image.model');
const sequelize = require('../config/db');
const Booking = require('./booking.model');
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

//Relationship
Room.hasMany(Booking, { foreignKey: 'room_id', onDelete: 'CASCADE' });
Booking.belongsTo(Room, { foreignKey: 'room_id' });

Room.hasMany(Image);
Image.belongsTo(Room);

Room.hasOne(Price);
Price.belongsTo(Room);

module.exports = Room;
