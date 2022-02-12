const { Sequelize } = require("sequelize");

const {
  NODE_ENV,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
} = require("../config/dotenv");

const optionsDev = {
  logging: false, // Disables logging
};

const optionsProd = {
  logging: false, // Disables logging
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  NODE_ENV === "development" ? optionsDev : optionsProd
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
