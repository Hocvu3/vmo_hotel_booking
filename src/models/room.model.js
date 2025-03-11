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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    max_guests: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10,
      },
    },
  },
  {
    timestamps: true, //Auto create Created_at and Updated_at
    indexes: [
      {
        fields: ['name'],
        name: 'idx_room_name',
      },
      {
        fields: ['description'],
        name: 'idx_room_description',
      },
    ],
  }
);

//Relationship

Room.hasMany(Booking, { foreignKey: 'roomId', onDelete: 'CASCADE' });
Booking.belongsTo(Room, { foreignKey: 'roomId' });

Room.hasMany(Image);
Image.belongsTo(Room);

Room.hasOne(Price, { foreignKey: 'roomId' });
Price.belongsTo(Room, { foreignKey: 'roomId' });

module.exports = Room;
