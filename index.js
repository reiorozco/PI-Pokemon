const express = require("express");
const router = require("./app");
const sequelize = require("./database/dataBase");

const server = express();

// const { PORT, HOST } = require("./config/dotenv");

server.use(router);

sequelize.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, process.env.HOST, () =>
    console.log(
      `App listening on http://${process.env.HOST}:${process.env.PORT}`
    )
  );
});
