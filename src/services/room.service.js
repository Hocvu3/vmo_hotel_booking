const { Sequelize, Op } = require('sequelize');
const { Room, Image, Price, Hotel, Review, Booking } = require('../models/db');

async function getRoomsWithParameters(page, limit, sortBy) {
  try {
    const offset = (page - 1) * limit;
    const totalRooms = await Room.count({ where: { status: 'Availlable' } });
    const totalPages = Math.ceil(totalRooms / limit);

    // Default sorting
    let order = [['createdAt', 'DESC']];

    // Sort by price
    if (sortBy === 'Price: Low to High') {
      order = [[{ model: Price, as: 'price' }, 'amount', 'ASC']];
    } else if (sortBy === 'Price: High to Low') {
      order = [[{ model: Price, as: 'price' }, 'amount', 'DESC']];
    }

    // Sort by rating
    let ratingOrder = '';
    if (sortBy === 'Rating: High to Low') {
      ratingOrder = 'DESC';
    } else if (sortBy === 'Rating: Low to High') {
      ratingOrder = 'ASC';
    }

    const rooms = await Room.findAll({
      where: { status: 'Availlable' },
      limit: limit,
      offset: offset,
      include: [
        {
          model: Image,
          attributes: ['image_url'],
          required: false,
        },
        {
          model: Price,
          as: 'price',
          attributes: ['amount'],
          required: false,
          where: { amount: { [Op.gt]: 0 } },
        },
        {
          model: Hotel,
          as: 'hotel',
          attributes: ['id', 'name', 'address'],
          include: [
            {
              model: Review,
              as: 'reviews',
              attributes: [],
              required: false,
            },
          ],
        },
      ],
      attributes: [
        'id',
        'status',
        'name',
        'max_guests',
        'hotel_id',
        [
          Sequelize.fn('AVG', Sequelize.col('"hotel"."reviews"."rating"')),
          'averageRating',
        ],
      ],
      group: ['"room"."id"', '"images"."id"', '"price"."id"', '"hotel"."id"'],
      order: ratingOrder
        ? [[Sequelize.literal('"averageRating"'), ratingOrder]] // Quote the alias
        : order,
      subQuery: false,
    });

    // Convert to plain JSON and format the response
    const roomsWithAverageRating = rooms.map((room) => {
      const plainRoom = room.get({ plain: true });
      return {
        ...plainRoom,
        hotel: {
          ...plainRoom.hotel,
          averageRating: parseFloat(plainRoom.averageRating) || 0,
        },
      };
    });

    return { rooms: roomsWithAverageRating, totalPages };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getRoomsWithParameters };
