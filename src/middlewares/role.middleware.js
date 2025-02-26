const appError = require('../utils/appError');

const restrictedTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.roles)) {
      return next(
        new appError(
          'You do no have permission to perform this task! Try later',
          401
        )
      );
    }
    next();
  };
};

module.exports = restrictedTo;
