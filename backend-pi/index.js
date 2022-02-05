const server = require("./app");
const sequelize = require("./database/dataBase");

const { PORT, HOST } = require("./config/dotenv");

sequelize.sync({ force: true }).then(() => {
  server.listen(PORT, HOST, () =>
    console.log(`App listening on http://${HOST}:${PORT}`)
  );
});
