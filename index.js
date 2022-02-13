const server = require("./app");
const sequelize = require("./database/dataBase");

// const { PORT, HOST } = require("./config/dotenv");

sequelize.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, process.env.HOST, () =>
    console.log(`App listening on http://${process.env.HOST}:${process.env.PORT}`)
  );
});
