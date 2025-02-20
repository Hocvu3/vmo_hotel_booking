const express = require('express');
const app = require('./app');
const { Sequelize } = require('sequelize');
const sequelize = require('./src/config/db');
require('dotenv').config();

// check connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync(); // Tạo bảng tự động
  })
  .then(() => {
    console.log('Sequelize models synchronized.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server running on port 3000!');
});

module.exports = sequelize;
