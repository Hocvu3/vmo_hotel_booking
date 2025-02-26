const { User } = require('../models/db');
const apiResponse = require('../utils/apiResponse');

// Add users
const store = async (req, res) => {
  try {
    const user = await User.bulkCreate(
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

    return apiResponse(res, 201, 'User added successfully', user);
  } catch (error) {
    return apiResponse(res, 500, 'Server error');
  }
};

// get users
const index = async (req, res) => {
  try {
    const users = await User.findAll();
    return apiResponse(res, 200, 'Success', users);
  } catch (error) {
    return apiResponse(res, 500, 'Server Error', { error: error.message });
  }
};

// Get user
const show = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return apiResponse(res, 404, 'User not found');
    } else {
      return apiResponse(res, 200, 'Success', user);
    }
  } catch (error) {
    return apiResponse(res, 500, 'Server error', { error: error.message });
  }
};

// Update user
const update = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return apiResponse(res, 404, 'User not found');
    }
    //Update user with id
    await user.update(req.body);
    return apiResponse(res, 204, 'User updated successfully');
  } catch (error) {
    return apiResponse(res, 500, 'Server error', { error: error.message });
  }
};

// delete users
const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    return apiResponse(res, 204, 'User deleted');
  } catch (error) {
    return apiResponse(res, 500, 'Server error', { error: error.message });
  }
};

module.exports = {
  store,
  index,
  destroy,
  show,
  update,
};
