const { Price } = require('../models/db');
const { Sequelize, Op } = require('sequelize');

// Get min max price
async function getPriceRange() {
  const priceStats = await Price.findOne({
    attributes: [
      [Sequelize.fn('MIN', Sequelize.col('amount')), 'minPrice'],
      [Sequelize.fn('MAX', Sequelize.col('amount')), 'maxPrice'],
    ],
    where: { amount: { [Op.gt]: 0 } },
  });
  return {
    minPrice: priceStats ? Number(priceStats.get('minPrice')) || 0 : 0,
    maxPrice: priceStats ? Number(priceStats.get('maxPrice')) || 50000 : 50000,
  };
}

function buildStarRatingSubquery(starRatings) {
  if (starRatings.length === 0) return null;
  return Sequelize.literal(`
      (SELECT "hotel"."id" 
       FROM "hotels" AS "hotel"
       LEFT JOIN "reviews" AS "reviews" 
       ON "hotel"."id" = "reviews"."hotel_id"
       GROUP BY "hotel"."id"
       HAVING AVG("reviews"."rating") >= ${Math.min(...starRatings) - 1}
       AND AVG("reviews"."rating") <= ${Math.max(...starRatings)})
    `);
}

module.exports = { getPriceRange, buildStarRatingSubquery };
