const jwt = require('jsonwebtoken');
const env = require('../config/env');
const User = require('../models/user.model');
const appError = require('../utils/appError');

const createSendToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });

  const cookieOptions = {
    expires: new Date(
      Date.now() + env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (env.NODE_ENV === 'production') cookieOptions.secure = true;

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

// Login
const login = async (req, res, next) => {
  const { email, password } = req.body;

  //find user
  const user = await User.findOne({ where: { email } });

  //check if user exists
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new appError('Incorrect email or password', 401));
  }

  //if user exist and password is correct
  createSendToken(user, 200, res);
};

// Logout
const logout = (req, res) => {
  res.cookie('jwt', '', {
    expires: new Date(0),
    httpOnly: true,
  });
  res.status(200).json({
    status: 'success',
    message: 'Logged out successfully',
  });
};

module.exports = {
  login,
  logout,
};
