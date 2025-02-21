const env = require('./env');
const { Sequelize } = require('sequelize');
// connect to database
const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
  logging: false,
});
module.exports = sequelize;
