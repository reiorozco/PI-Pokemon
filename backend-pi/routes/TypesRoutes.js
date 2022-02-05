const express = require("express");
const router = express.Router();

const { getTypesPokemons } = require("../controllers/Controllers");

router.get("/", async (req, res) => {
  const typesPokemons = await getTypesPokemons();

  return res.send(typesPokemons);
});

module.exports = router;
