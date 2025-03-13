const { Sequelize, Op } = require('sequelize'); // Import Operators
const apiResponse = require('../utils/apiResponse');
const { getPriceRange } = require('../utils/dbUtil');
const roomService = require('../services/room.service');
const {
  parseQueryParams,
  parseSearchParams,
} = require('../helpers/queryHelper');
const {
  Image,
  Room,
  Price,
  Hotel,
  Review,
  Category,
  Service,
} = require('../models/db');
// Return homepage
const getHomePage = async (req, res) => {
  const params = parseQueryParams(req);
  const { minPrice, maxPrice } = await getPriceRange();
  const categories = await Category.findAll({ attributes: ['id', 'name'] });
  const { rooms, totalPages } = await roomService.searchRooms(params);
  return res.render('home', {
    title: 'Home Page',
    rooms,
    currentPage: params.page,
    totalPages: totalPages || 1,
    minPrice,
    maxPrice,
    categories: categories.map((cat) => cat.get({ plain: true })),
  });
};

// Search
const searchRoom = async (req, res) => {
  const params = parseQueryParams(req);
  const { minPrice, maxPrice } = await getPriceRange();
  const categories = await Category.findAll({ attributes: ['id', 'name'] });
  const { rooms, totalPages } = await roomService.searchRooms(params);
  return res.status(200).render('home', {
    title: 'Search Results',
    rooms,
    currentPage: params.page,
    totalPages: totalPages || 1,
    sortBy: params.sortBy,
    starRatings: params.starRatings,
    roomTypes: params.roomTypes,
    priceRange: params.priceRange,
    searchParams: {
      name: params.name,
      checkInDate: params.checkInDate,
      checkOutDate: params.checkOutDate,
      guests: params.guests,
    },
    minPrice,
    maxPrice,
    categories: categories.map((cat) => cat.get({ plain: true })),
  });
};

// Return a specific room
const roomDetail = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id, {
      include: [
        {
          model: Image,
          as: 'images',
          attributes: ['image_url'], // Take attributes from array.
        },
        {
          model: Price,
          as: 'price',
          attributes: ['amount'],
          required: true, // Same as INNER JOIN
          where: { amount: { [Op.gt]: 0 } },
        },
        {
          model: Category,
          as: 'category',
          attributes: ['name'],
        },
        {
          model: Hotel,
          as: 'hotel',
          attributes: ['name', 'address'],
          include: [
            {
              model: Review,
              as: 'reviews',
              attributes: ['rating'],
            },
          ],
        },
      ],
    });
    if (!room) {
      return apiResponse(res, 404, 'Room not found');
    }
    const services = await Service.findAll({
      include: [
        {
          model: Price,
          as: 'prices',
          attributes: ['amount'],
          required: true, // Same as INNER JOIN
          where: { amount: { [Op.gt]: 0 } },
        },
      ],
    });
    res.status(200).render('room', {
      title: 'Rooms',
      room,
      services,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Server error', error: error.message });
  }
};

// Summary
const summary = (req, res) => {
  res.status(200).render('summary', {
    title: 'Summary',
  });
};

// Return login page
const login = (req, res) => {
  res.status(200).render('login', {
    title: 'Login',
  });
};

// Return register page
const register = (req, res) => {
  res.status(200).render('register', {
    title: 'Register',
  });
};

// Return user dashboard
const dashboard = (req, res) => {
  res.status(200).render('dashboard', {
    title: 'User Dashboard',
  });
};

// Return url
const returnUrl = (req, res) => {
  res.status(200).render('booking_success', {
    title: 'Payment Success',
  });
};
module.exports = {
  getHomePage,
  searchRoom,
  roomDetail,
  summary,
  login,
  register,
  dashboard,
  returnUrl,
};
