const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const appError = require('../utils/appError');
require('dotenv').config();

const createSendToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  // Remove password before send it to users.
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

// Dang nhap
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  //check if email exists and password is correct
  if (!email || !password) {
    return next(new appError('Please provide email and password!', 400));
  }
  //find user
  const user = await User.findOne({ where: { email } });

  //check if user exists
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new appError('Incorrect email or password', 401));
  }

  //if user exist and password is correct
  createSendToken(user, 200, res);
};

// Dang xuat
exports.logout = (req, res) => {
  res.cookie('jwt', '', {
    expires: new Date(0),
    httpOnly: true,
  });

  res
    .status(200)
    .json({ status: 'success', message: 'Logged out successfully' });
};
