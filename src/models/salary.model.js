const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const Salary = sequelize.define(
  'salary',
  {
    id: {
      type: DataTypes.UUID, //Auto increment
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Salary;
