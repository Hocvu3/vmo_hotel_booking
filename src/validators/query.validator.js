const { query } = require('express-validator');

const validateRoomQuery = [
  query('page')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Page must be a positive integer'),
  query('sortBy')
    .optional()
    .isIn([
      '',
      'Price: Low to High',
      'Price: High to Low',
      'Rating: High to Low',
      'Rating: Low to High',
    ])
    .withMessage('Invalid sortBy value'),
  query('starRatings')
    .optional()
    .custom((value) => {
      const ratings = Array.isArray(value) ? value : [value];
      return ratings.every((r) => Number.isInteger(+r) && r >= 1 && r <= 5);
    })
    .withMessage('Star ratings must be integers between 1 and 5'),
  query('roomTypes')
    .optional()
    .custom((value) => {
      const types = Array.isArray(value) ? value : [value];
      return types.every((t) =>
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
          t
        )
      );
    })
    .withMessage('Room types must be valid UUIDs'),
  query('priceRange')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Price range must be a non-negative integer'),
];

module.exports = { validateRoomQuery };
