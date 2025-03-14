const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const validate = require('validator');
const Review = require('./review.model');
const Salary = require('./salary.model');
const sequelize = require('../config/db');
const Booking = require('./booking.model');
const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.UUID, // UUID as ID
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: 'default.jpg',
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',
      validate: {
        isIn: [['user', 'employee', 'admin']],
      },
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 100],
      },
    },
    passwordChangedAt: {
      type: DataTypes.DATE,
    },
    passwordResetToken: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true, // Tự động tạo createdAt, updatedAt
    hooks: {
      beforeCreate: async (user) => {
        // Nếu password được sửa, hash nó
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 12);
        }
        // Xóa passwordConfirm
        user.passwordConfirm = undefined;
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 12);
        }
        user.passwordConfirm = undefined;
      },
    },
  }
);

// Relationship
User.hasMany(Booking, { foreignKey: 'userId', onDelete: 'CASCADE' });
Booking.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(Salary, { foreignKey: 'userId', onDelete: 'CASCADE' });
Salary.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User);

// Check password
User.prototype.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Check whether password changed during jwt sent or not
User.prototype.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = Math.floor(
      this.passwordChangedAt.getTime() / 1000
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

module.exports = User;
