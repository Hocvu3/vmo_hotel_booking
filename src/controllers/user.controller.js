const db = require('../models/db');
const appError = require('../utils/appError');
const { User } = db;

// Add users
const addUsers = async (req, res) => {
  try {
    await User.bulkCreate(
      [
        {
          name: 'Michadel Jackson Johnson',
          email: 'michaedl.johnson@example.com',
          password: 'password789',
          passwordConfirm: 'password789',
          role: 'employee',
        },
      ],
      {
        individualHooks: true, // Active hook
      }
    );

    res.status(201).send('Users have been added to the database!');
  } catch (error) {
    res.status(500).send('Error adding users: ' + error.message);
  }
};

// get users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      status: 'succes',
      data: {
        data: users,
      },
    });
  } catch (error) {
    res.status(500).send('Error fetching users: ' + error.message);
  }
};

// Get user
const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.status(200).json({
        status: 'success',
        data: {
          data: user,
        },
      });
    }
  } catch (error) {
    res.status(500).send('Error fetching user: ' + error.message);
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return next(appError('User not fount', 404));
    }
    //Find user with id
    await user.update(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        data: user,
      },
    });
  } catch (error) {
    res.status(500).send('Error updating user: ' + error.message);
  }
};

// delete users
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.status(200).send('User deleted successfully!');
  } catch (error) {
    res.status(500).send('Error deleting user: ' + error.message);
  }
};

module.exports = {
  addUsers,
  getUsers,
  deleteUser,
  getUser,
  updateUser,
};
