const { body, validationResult } = require('express-validator');

const validateRefund = [
  body('paymentIntentId')
    .notEmpty()
    .withMessage('paymentIntentId is required.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateRefund;
