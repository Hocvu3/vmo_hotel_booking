const jwt = require('jsonwebtoken');
const env = require('../config/env');
const { promisify } = require('util');
const { User } = require('../models/db');
const appError = require('../utils/appError');

const isProtected = async (req, res, next) => {
  let token;

  //Check if token exists (Header or Cookie)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new appError('You are not logged in! Please log in.', 401));
  }

  try {
    //Verify the token
    const decodedToken = await promisify(jwt.verify)(token, env.JWT_SECRET);

    //Check if the user still exists
    const currentUser = await User.findByPk(decodedToken.id); // Use findByPk for efficiency

    if (!currentUser) {
      return next(new appError('User no longer exists.', 401));
    }

    //Check wether password changed or not
    if (currentUser.changedPasswordAfter(decodedToken.iat)) {
      return next(
        new appError('User recently changed password! Please log in again', 401)
      );
    }

    //Grant access
    req.user = currentUser; // Attach user data to request
    res.locals.user = currentUser; // Optional: Attach to res.locals for views

    next(); // Continue to next middleware
  } catch (error) {
    return next(new appError('Invalid or expired token', 401));
  }
};

// Check logged in or not
const isLoggedIn = async (req, res, next) => {
  //1. check if token exist
  if (req.cookies.jwt) {
    try {
      //2. verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        env.JWT_SECRET
      );
      //3. check if user still, if not,
      const currentUser = await User.findByPk(decoded.id);
      if (!currentUser) {
        return next();
      }
      //4. check if user changed password after the token was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }
      //Grant access to protected
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

module.exports = { isProtected, isLoggedIn };
