const axios = require("axios");
// const { Pokemon, Type } = require("../db.js");

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const getPokemons = async () => {
  try {
    const totalData = 40;
    let data = [];
    let dataSpecies = [];

    for (let i = 1; i <= totalData; i++) {
      let request = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`).then(
        (res) => res.data
      );
      data.push(request);
    }

    for (let i = 0; i < data.length; i++) {
      let pokemonSpecie = await axios(data[i].species.url).then(
        (res) => res.data
      );
      dataSpecies.push(pokemonSpecie);
    }

    const pokemons = data.map((p, index) => {
      let gender = dataSpecies[index].gender_rate;

      return {
        id: p.id,
        name: capitalizeFirstLetter(p.name),
        img: p.sprites.other["official-artwork"].front_default,
        height: `${p.height / 10} m`,
        weight: `${p.weight / 10} kg`,
        health: p.stats[0].base_stat,
        attack: p.stats[1].base_stat,
        defense: p.stats[2].base_stat,
        speed: p.stats[5].base_stat,
        category: dataSpecies[index].genera[7].genus,
        ability: capitalizeFirstLetter(p.abilities[0].ability.name),
        gender:
          gender === -1
            ? "Genderless"
            : gender === 0
            ? "Male"
            : gender === 8
            ? "Female"
            : "Male or Female",
        type: p.types.map((t) => t.type.name),
        fromDb: false,
      };
    });

    return pokemons;
  } catch (error) {
    console.error("Error in getPokemons:", error.message);
  }
};

const getDbPokemons = async () => {
  try {
    const data = (
      await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      })
    ).map((pokemon) => {
      const json = pokemon.toJSON();
      return {
        ...json,
        types: json.types.map((type) => type.name),
      };
    });

    return data;
  } catch (error) {
    console.error("Error in getDbPokemons:", error.message);
  }
};

const getAllPokemons = async () => {
  try {
    const getPokemons = await getPokemons();
    const getDbPokemons = await getDbPokemons();
    const allPokemons = [...getPokemons, ...getDbPokemons];

    return allPokemons;
  } catch (error) {
    console.error("Error in getAllPokemons:", error.message);
  }
};

const getPokemonById = async (id) => {
  try {
    let data = [];
    let dataSpecies = [];

    let request = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
      (res) => res.data
    );
    data.push(request);

    let requestSpecie = await axios(data[0].species.url).then(
      (res) => res.data
    );
    dataSpecies.push(requestSpecie);

    let pokemon = data.map((p, index) => {
      let gender = dataSpecies[index].gender_rate;

      return {
        id: p.id,
        name: capitalizeFirstLetter(p.name),
        img: p.sprites.other["official-artwork"].front_default,
        height: `${p.height / 10} m`,
        weight: `${p.weight / 10} kg`,
        health: p.stats[0].base_stat,
        attack: p.stats[1].base_stat,
        defense: p.stats[2].base_stat,
        speed: p.stats[5].base_stat,
        category: dataSpecies[index].genera[7].genus,
        ability: capitalizeFirstLetter(p.abilities[0].ability.name),
        gender:
          gender === -1
            ? "Genderless"
            : gender === 0
            ? "Male"
            : gender === 8
            ? "Female"
            : "Male or Female",
        type: p.types.map((t) => t.type.name),
        fromDb: false,
      };
    });

    return pokemon;
  } catch (error) {
    console.error("Error in getPokemonById:", error.message);
  }
};

const getPokemonByName = async (name) => {
  try {
    let data = [];
    let dataSpecies = [];
    name = name.toLowerCase().trim();

    let request = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (res) => res.data
    );
    data.push(request);

    let requestSpecie = await axios(data[0].species.url).then(
      (res) => res.data
    );
    dataSpecies.push(requestSpecie);

    let pokemon = data.map((p, index) => {
      let gender = dataSpecies[index].gender_rate;

      return {
        id: p.id,
        name: capitalizeFirstLetter(p.name),
        img: p.sprites.other["official-artwork"].front_default,
        height: `${p.height / 10} m`,
        weight: `${p.weight / 10} kg`,
        health: p.stats[0].base_stat,
        attack: p.stats[1].base_stat,
        defense: p.stats[2].base_stat,
        speed: p.stats[5].base_stat,
        category: dataSpecies[index].genera[7].genus,
        ability: capitalizeFirstLetter(p.abilities[0].ability.name),
        gender:
          gender === -1
            ? "Genderless"
            : gender === 0
            ? "Male"
            : gender === 8
            ? "Female"
            : "Male or Female",
        type: p.types.map((t) => t.type.name),
        fromDb: false,
      };
    });

    return pokemon;
  } catch (error) {
    console.error("Error in getPokemonByName:", error.message);
  }
};

module.exports = {
  getPokemons,
  getDbPokemons,
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
};
