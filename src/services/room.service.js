const { Sequelize, Op } = require('sequelize');
const { formatRoomData } = require('../utils/dataUtil');
const { calculatePagination } = require('../helpers/paginationHelper');
const { buildWhereClauses, getSortOrder } = require('../helpers/queryHelper');
const { Room, Image, Price, Hotel, Review, Category } = require('../models/db');

async function getRoomsWithParameters(
  page,
  limit,
  sortBy,
  starRatings,
  roomTypes,
  priceRange
) {
  const { whereClause, hotelWhereClause, priceWhereClause } = buildWhereClauses(
    starRatings,
    roomTypes,
    priceRange
  );

  const filteredRooms = await Room.findAll({
    where: whereClause,
    include: [
      {
        model: Hotel,
        as: 'hotel',
        where: hotelWhereClause,
        include: [{ model: Review, as: 'reviews', attributes: [] }],
        required: true,
      },
      {
        model: Price,
        as: 'price',
        where: priceWhereClause,
        attributes: [],
        required: true,
      },
    ],
    attributes: ['id'],
    subQuery: false,
  });

  const roomIds = filteredRooms.map((room) => room.id);
  const { totalPages, offset } = calculatePagination(
    roomIds.length,
    page,
    limit
  );
  const order = getSortOrder(sortBy);

  const rooms = await Room.findAll({
    where: { id: { [Op.in]: roomIds } },
    limit,
    offset,
    include: [
      { model: Image, attributes: ['image_url'], required: false },
      {
        model: Price,
        as: 'price',
        attributes: ['amount'],
        where: priceWhereClause,
        required: true,
      },
      {
        model: Hotel,
        as: 'hotel',
        attributes: ['id', 'name', 'address'],
        where: hotelWhereClause,
        include: [{ model: Review, as: 'reviews', attributes: [] }],
        required: true,
      },
      {
        model: Category,
        as: 'category',
        attributes: ['name'],
        required: false,
      },
    ],
    attributes: [
      'id',
      'status',
      'name',
      'max_guests',
      'hotel_id',
      [
        require('sequelize').fn(
          'AVG',
          require('sequelize').col('"hotel"."reviews"."rating"')
        ),
        'averageRating',
      ],
    ],
    group: [
      '"room"."id"',
      '"category"."id"',
      '"images"."id"',
      '"price"."id"',
      '"hotel"."id"',
    ],
    order,
    subQuery: false,
  });

  return { rooms: formatRoomData(rooms), totalPages };
}

module.exports = { getRoomsWithParameters };
