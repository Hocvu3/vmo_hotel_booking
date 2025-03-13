const { Sequelize, Op } = require('sequelize');
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
  const { name, checkInDate, checkOutDate, guests } = parseSearchParams(req);
  return {
    page,
    limit,
    sortBy,
    starRatings,
    roomTypes,
    priceRange,
    name,
    checkInDate,
    checkOutDate,
    guests,
  };
}

// Parse search params
function parseSearchParams(req) {
  const name = req.query.name?.trim() || '';
  const checkInDate = req.query.checkInDate || null;
  const checkOutDate = req.query.checkOutDate || null;
  const guests = req.query.guests ? parseInt(req.query.guests) : 1;
  return { name, checkInDate, checkOutDate, guests };
}

// Build where clauses for filtering & search
function buildCombinedWhereClauses({
  name,
  checkInDate,
  checkOutDate,
  guests,
  starRatings,
  roomTypes,
  priceRange,
}) {
  const whereClause = { status: 'Availlable' };
  const hotelWhereClause = {};
  const priceWhereClause = { amount: { [Op.gt]: 0 } };
  let replacements = {};

  // Search conditions
  if (name) {
    whereClause[Op.and] = whereClause[Op.and] || [];
    whereClause[Op.and].push(
      Sequelize.literal(
        '("search_vector" @@ to_tsquery(:nameQuery) OR "room"."name" % :nameRaw OR "room"."description" % :nameRaw)'
      )
    );
    replacements.nameQuery = name.replace(/\s+/g, ' & ');
    replacements.nameRaw = name;
  }

  // Logic check in check out
  if (checkInDate && checkOutDate) {
    // Eliminate room in checkInDate - checkOutDate
    whereClause.id = {
      [Op.notIn]: Sequelize.literal(
        `(SELECT "roomId" FROM bookings WHERE arrival_date < '${checkOutDate}' AND departure_date > '${checkInDate}')`
      ),
    };
  } else if (checkInDate) {
    // Eliminate rooms where departure_date > checkInDate
    whereClause.id = {
      [Op.notIn]: Sequelize.literal(
        `(SELECT "roomId" FROM bookings WHERE departure_date > '${checkInDate}')`
      ),
    };
  } else if (checkOutDate) {
    // Eliminate rooms where arrival_date < checkOutDate
    whereClause.id = {
      [Op.notIn]: Sequelize.literal(
        `(SELECT "roomId" FROM bookings WHERE arrival_date < '${checkOutDate}')`
      ),
    };
  }

  // Filter conditions
  if (roomTypes.length > 0) whereClause.categoryId = { [Op.in]: roomTypes };
  if (starRatings.length > 0) {
    hotelWhereClause.id = { [Op.in]: buildStarRatingSubquery(starRatings) };
  }
  if (priceRange !== null) priceWhereClause.amount = { [Op.lte]: priceRange };

  return { whereClause, hotelWhereClause, priceWhereClause, replacements };
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
  else if (sortBy === 'Name: A to Z') order = [['name', 'ASC']];
  else if (sortBy === 'Name: Z to A') order = [['name', 'DESC']];
  return order;
}

module.exports = {
  parseQueryParams,
  parseSearchParams,
  buildCombinedWhereClauses,
  getSortOrder,
};
