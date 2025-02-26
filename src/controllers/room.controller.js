const { Room } = require('../models/db');
const apiResponse = require('../utils/apiResponse');
//Get rooms
const index = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    return apiResponse(res, 200, 'Success', rooms);
  } catch (error) {
    return apiResponse(res, 500, 'Error fetching rooms', {
      error: error.message,
    });
  }
};

//Get room
const show = async (req, res) => {
  try {
    const room = await Room.findOne({ where: { id: req.params.id } });
    if (room) {
      return apiResponse(res, 200, 'Success', room);
    } else {
      return apiResponse(res, 404, 'Room not found');
    }
  } catch (error) {
    return apiResponse(res, 500, 'Error fetching room', {
      error: error.message,
    });
  }
};

//Add room
const store = async (req, res) => {
  try {
    // check is empty
    if (!req.body) {
      return apiResponse(res, 400, 'Request body can not be empty');
    }
    // create
    const newRoom = await Room.create(req.body);
    return apiResponse(res, 201, 'Added new room successfully', newRoom);
  } catch (error) {
    return apiResponse(res, 500, 'Server error', { error: error.message });
  }
};

//Update room
const update = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) {
      return apiResponse(res, 404, 'Room not found');
    }
    //Find user with id
    await room.update(req.body);
    return apiResponse(res, 204, 'Updated successfully');
  } catch (error) {
    return apiResponse(res, 500, 'Server error', { error: error.message });
  }
};

//Delete room
const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await Room.destroy({ where: { id } });
    return apiResponse(res, 204, 'Room deleted');
  } catch (error) {
    return apiResponse(res, 500, 'Server error', { error: error.message });
  }
};

module.exports = {
  index,
  show,
  update,
  store,
  destroy,
};
