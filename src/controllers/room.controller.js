const { where, Model } = require('sequelize');
const Room = require('../models/db');
const appError = require('../utils/appError');

//Get rooms
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.status(200).json({
      status: 'success',
      data: {
        data: rooms,
      },
    });
  } catch (error) {
    res.status(500).send('Error fetching rooms: ' + error.message);
  }
};

//Get room
const getRoom = async (req, res) => {
  try {
    const room = Room.findOne({ where: { id: req.params.id } });
    if (room) {
      res.status(200).json({
        status: 'success',
        data: {
          data: room,
        },
      });
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching room: ' + error.message);
  }
};

//Add room
const addRoom = async (req, res) => {
  try {
    // check is empty
    if (!req.body) {
      return res.status(400).json({ message: 'Request body is empty.' });
    }

    // create
    const newRoom = await Room.create(req.body);

    return res.status(201).json({
      status: 'success',
      data: newRoom,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
};

//Update room
const updateRoom = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) {
      return next(appError('Room not fount', 404));
    }
    //Find user with id
    await room.update(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        data: room,
      },
    });
  } catch (error) {
    res.status(500).send('Error updating room: ' + error.message);
  }
};

//Delete room
const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    await Room.destroy({ where: { id } });
    res.status(200).send('Room deleted successfully!');
  } catch (error) {
    res.status(500).send('Error deleting room: ' + error.message);
  }
};

module.exports = {
  getRooms,
  getRoom,
  updateRoom,
  addRoom,
  deleteRoom,
};
