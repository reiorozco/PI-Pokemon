const express = require("express");
const router = express.Router();
const {
  getPokemonByName,
  dbPokemons,
  getAllPokemons,
  getPokemonById,
  createPokemon,
  deletePokemon,
} = require("../helpers/helpers");

router.get("/", async (req, res) => {
  const name = req.query.name;

  if (name) {
    const pokemonByName = await getPokemonByName(name);

    if (pokemonByName) return res.status(200).send(pokemonByName);
    else {
      const pokemonFromDbByName = await dbPokemons().then((res) =>
        res.filter(
          (p) => p.name.toLowerCase().trim() === name.toLowerCase().trim()
        )
      );

      if (pokemonFromDbByName.length > 0)
        return res.status(200).send(pokemonFromDbByName);
      else
        return res
          .status(404)
          .send(`Pokemon with the name ${name} was not found :/`);
    }
  } else {
    const allPokemons = await getAllPokemons();

    return res.status(200).send(allPokemons);
  }
});

router.get("/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;

  if (idPokemon) {
    const pokemonById = await getPokemonById(idPokemon);

    if (Array.isArray(pokemonById) && pokemonById.length > 0)
      return res.status(200).send(pokemonById);
    else {
      const pokemonFromDb = await dbPokemons().then((res) =>
        res.filter((p) => p.id === idPokemon)
      );
      if (pokemonFromDb.length > 0) return res.status(200).send(pokemonFromDb);
      else
        res
          .status(404)
          .send(`Pokemon with the name ${idPokemon} was not found :/`);
    }
  } else
    res.status(404).send(`Pokemon with the id ${idPokemon} was not found :/`);
});

router.post("/", async (req, res) => {
  const {
    name,
    height,
    weight,
    health,
    attack,
    defense,
    speed,
    fromDb,
    types,
    img,
  } = req.body;

  const newPokemon = await createPokemon(
    name,
    height,
    weight,
    health,
    attack,
    defense,
    speed,
    fromDb,
    types,
    img
  );

  return res.status(200).send(newPokemon);
});

router.delete("/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;

  if (idPokemon) {
    const delPokemon = await deletePokemon(idPokemon);

    return res.status(200).send(delPokemon);
  } else
    res.status(404).send(`Pokemon with the id ${idPokemon} was not found :/`);
});

module.exports = router;
