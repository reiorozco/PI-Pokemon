const express = require("express");
const morgan = require("morgan");
const path = require("path");

const pokemonsRoutes = require("./routes/PokemonsRoutes");
const typesRoutes = require("./routes/TypesRoutes");

const server = express();

server.name = "API";

server.use(express.static(path.resolve(__dirname, "./client/build")));

server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));

server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  next();
});

server.use("/pokemons", pokemonsRoutes);
server.use("/types", typesRoutes);

// Error Handling
server.use((err, req, res) => {
  const status = err.status || 500;
  const message = err.message || err;

  console.error(err);

  res.status(status).send(message);
});

module.exports = server;
