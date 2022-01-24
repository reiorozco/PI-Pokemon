import {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_TYPES,
  RESET_FILTERS,
} from "../actions";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  details: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        // pokemons: action.payload,
        allPokemons: action.payload,
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };

    case RESET_FILTERS:
      return {
        ...state,
        pokemons: [],
      };

    default:
      return { ...state };
  }
}
