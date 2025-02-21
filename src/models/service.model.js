const Image = require('./image.model');
const Price = require('./price.model');
const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');
const Booking_Service = require('./booking_service.model');
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

// Relationship
Service.hasMany(Image);
Image.belongsTo(Service);

Service.hasMany(Price);
Price.belongsTo(Service);

Service.hasOne(Booking_Service);
Booking_Service.belongsTo(Service);

module.exports = Service;
