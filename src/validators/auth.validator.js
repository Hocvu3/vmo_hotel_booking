const appError = require('../utils/appError');
const { body, validationResult } = require('express-validator');

const validateLogin = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').notEmpty().withMessage('Please enter a password'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new appError(errors.array()[0].msg, 400));
    }
    next();
  },
];

module.exports = { validateLogin };
