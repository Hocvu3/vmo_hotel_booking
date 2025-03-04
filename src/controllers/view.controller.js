const { Op } = require('sequelize'); // Import Operators
const apiResponse = require('../utils/apiResponse');
const {
  Image,
  Room,
  Price,
  Hotel,
  Review,
  Category,
  Service,
} = require('../models/db');
const { title } = require('process');
// Return homepage
const home = async (req, res) => {
  try {
    // Pagination
    const page = parseInt(req.query.page) || 1; // Take page from query params
    const limit = 10;
    const offset = (page - 1) * limit;

    // Count Active Rooms
    const totalRooms = await Room.count({ where: { status: 'Availlable' } });
    const totalPages = Math.ceil(totalRooms / limit);

    // Take room and pagination
    const rooms = await Room.findAll({
      where: { status: 'Availlable' }, // Take only available rooms
      limit: limit,
      offset: offset, // Skip previous records
      order: [['createdAt', 'DESC']],
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
    return res.status(200).render('home', {
      title: 'Home Page',
      rooms,
      currentPage: page,
      totalPages: totalPages,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Server error', error: error.message });
  }
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

module.exports = { home, roomDetail, summary, login, register, dashboard };
