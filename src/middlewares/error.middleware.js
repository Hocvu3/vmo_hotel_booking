const { validationResult } = require('express-validator');

const errorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: 'Validation failed', errors: errors.array() });
  }
  next();
};

const handleErrors = (err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Server error', error: err.message });
};

module.exports = { errorMiddleware, handleErrors };
