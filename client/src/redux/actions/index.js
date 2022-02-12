import axios from "axios";


export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const POST_POKEMON = "POST_POKEMON";
export const RESET_FILTERS = "RESET_FILTERS";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_BY = "ORDER_BY";

export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const pokemons = await axios(`${process.env.REACT_APP_DATABASE_URL}/pokemons`);
      dispatch({ type: GET_POKEMONS, payload: pokemons.data });
    } catch (error) {
      console.error("Error in action getPokemons:", error.message);
    }
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    try {
      const pokemonsTypes = await axios(`${process.env.REACT_APP_DATABASE_URL}/types`);
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
        `${process.env.REACT_APP_DATABASE_URL}/pokemons?name=${name}`
      );
      dispatch({ type: GET_POKEMON_BY_NAME, payload: pokemonByName.data });
    } catch (error) {
      console.error("Error in action getPokemonByName:", error.message);
      dispatch({ type: GET_POKEMON_BY_NAME, payload: [name] });
    }
  };
};

export const postPokemon = (formData) => {
  return async function (dispatch) {
    try {
      const pokemonCreated = await axios.post(
        `${process.env.REACT_APP_DATABASE_URL}/pokemons`,
        formData
      );
      dispatch({ type: POST_POKEMON, payload: pokemonCreated });
    } catch (error) {
      console.error("Error in action postPokemon:", error.message);
      // dispatch({ type: GET_POKEMON_BY_NAME, payload: });
    }
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  };
};

export const filterByType = (types) => {
  return {
    type: FILTER_BY_TYPE,
    payload: types,
  };
};

export const filterByOrigin = (origin) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload: origin,
  };
};

export const orderBy = (order) => {
  return {
    type: ORDER_BY,
    payload: order,
  };
};
