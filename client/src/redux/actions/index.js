import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const RESET_FILTERS = "RESET_FILTERS";

export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const pokemons = await axios("http://localhost:3001/pokemons");
      dispatch({ type: GET_POKEMONS, payload: pokemons.data });
    } catch (error) {
      console.error("Error in action getPokemons:", error.message);
    }
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    try {
      const pokemonsTypes = await axios("http://localhost:3001/types");
      dispatch({ type: GET_TYPES, payload: pokemonsTypes.data });
    } catch (error) {
      console.error("Error in action getTypes:", error.message);
    }
  };
};

export const getPokemonByName = (name) => {
  return async function (dispatch) {
    try {
      const pokemonByName = await axios(
        `http://localhost:3001/pokemons?name=${name}`
      );
      dispatch({ type: GET_POKEMON_BY_NAME, payload: pokemonByName.data });
    } catch (error) {
      console.error("Error in action getPokemonByName:", error.message);
      dispatch({ type: GET_POKEMON_BY_NAME, payload: [name] });
    }
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  };
};
