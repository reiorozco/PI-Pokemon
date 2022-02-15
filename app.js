const express = require("express");
const morgan = require("morgan");
const path = require("path");

const pokemonsRoutes = require("./routes/PokemonsRoutes");
const typesRoutes = require("./routes/TypesRoutes");

const router = express.Router();

router.name = "API";

// router.use(express.static(path.resolve(__dirname, "./client/build")));

router.use(express.urlencoded({ extended: true, limit: "50mb" }));
router.use(express.json({ limit: "50mb" }));

router.use(morgan("dev"));

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  next();
});

router.use("/api/pokemons", pokemonsRoutes);
router.use("/api/types", typesRoutes);

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === "production") {
  // const path = require("path");
  // Serve the frontend's index.html file at the root route
  router.get("/", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve(__dirname, "./client/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
  });
}

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== "production") {
  router.get("/api/csrf/restore", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.status(201).json({});
  });
}

// Error Handling
router.use((err, req, res) => {
  const status = err.status || 500;
  const message = err.message || err;

  console.error(err);

  res.status(status).send(message);
});

module.exports = router;
