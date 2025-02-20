const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const Image = sequelize.define(
  'image',
  {
    id: {
      type: DataTypes.UUID, //Auto increase
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    image_url: {
      type: DataTypes.STRING,
      defaultValue: 'default.png',
    },
    object_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    object_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Image;
