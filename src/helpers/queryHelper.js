const { Op } = require('sequelize');
const { normalizeArrayParam } = require('../utils/dataUtil');
const { buildStarRatingSubquery } = require('../utils/dbUtil');

// Parse params
function parseQueryParams(req) {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const sortBy = req.query.sortBy;
  const starRatings = normalizeArrayParam(req.query.starRatings).map(Number);
  const roomTypes = normalizeArrayParam(req.query.roomTypes);
  const priceRange = req.query.priceRange
    ? parseInt(req.query.priceRange)
    : 500;
  return { page, limit, sortBy, starRatings, roomTypes, priceRange };
}

// Build where clauses for filtering
function buildWhereClauses(starRatings, roomTypes, priceRange) {
  const whereClause = { status: 'Availlable' };
  let hotelWhereClause = {};
  let priceWhereClause = { amount: { [Op.gt]: 0 } };

  if (roomTypes.length > 0) whereClause.categoryId = { [Op.in]: roomTypes };
  if (starRatings.length > 0) {
    hotelWhereClause.id = { [Op.in]: buildStarRatingSubquery(starRatings) };
  }
  if (priceRange !== null) priceWhereClause.amount = { [Op.lte]: priceRange };

  return { whereClause, hotelWhereClause, priceWhereClause };
}

// Sort
function getSortOrder(sortBy) {
  const { Sequelize } = require('sequelize');
  let order = [['createdAt', 'DESC']];
  const Price = require('../models/price.model');
  if (sortBy === 'Price: Low to High')
    order = [[{ model: Price, as: 'price' }, 'amount', 'ASC']];
  else if (sortBy === 'Price: High to Low')
    order = [[{ model: Price, as: 'price' }, 'amount', 'DESC']];
  else if (sortBy === 'Rating: High to Low')
    order = [[Sequelize.literal('"averageRating"'), 'DESC']];
  else if (sortBy === 'Rating: Low to High')
    order = [[Sequelize.literal('"averageRating"'), 'ASC']];
  return order;
}

module.exports = { parseQueryParams, buildWhereClauses, getSortOrder };
