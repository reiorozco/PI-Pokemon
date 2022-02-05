const { Sequelize } = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_HOST } = require("../config/dotenv");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
  {
    logging: false, // Disables logging
  }
);

module.exports = sequelize;
