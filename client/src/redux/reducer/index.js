import {
  FILTER_BY_ORIGIN,
  FILTER_BY_TYPE,
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_TYPES,
  ORDER_BY,
  POST_POKEMON,
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

    case POST_POKEMON:
      return {
        ...state,
      };

    case RESET_FILTERS:
      return {
        ...state,
        pokemons: [],
      };

    case FILTER_BY_TYPE:
      let rawFilter = [];

      action.payload.forEach((t) => {
        rawFilter = [
          ...rawFilter,
          state.allPokemons.filter((f) => f.types.indexOf(t) !== -1),
        ];
      });

      let filteredOut = [...new Set(rawFilter.flat())];

      return {
        ...state,
        pokemons: filteredOut,
      };

    case FILTER_BY_ORIGIN:
      let originFilter;

      action.payload === "All" || action.payload === ""
        ? (originFilter = [])
        : action.payload === "Existent"
        ? (originFilter = state.allPokemons.filter((o) => o.fromDb === false))
        : (originFilter = state.allPokemons.filter((o) => o.fromDb === true))
            .length > 0
        ? (originFilter = [...originFilter])
        : (originFilter = ["noData"]);

      return {
        ...state,
        pokemons: originFilter,
      };

    case ORDER_BY:
      let order = [...state.allPokemons];

      action.payload === "Number ID" || action.payload === ""
        ? (order = [])
        : action.payload === "High Attack"
        ? (order = order.sort((a, b) =>
            a.attack > b.attack ? -1 : a.attack < b.attack ? 1 : 0
          ))
        : action.payload === "Less Attack"
        ? (order = order.sort((a, b) =>
            a.attack > b.attack ? 1 : a.attack < b.attack ? -1 : 0
          ))
        : action.payload === "A-Z"
        ? (order = order.sort((a, b) =>
            a.name > b.name ? 1 : a.name < b.name ? -1 : 0
          ))
        : (order = order.sort((a, b) =>
            a.name > b.name ? -1 : a.name < b.name ? 1 : 0
          ));

      return {
        ...state,
        pokemons: order,
      };

    default:
      return { ...state };
  }
}
