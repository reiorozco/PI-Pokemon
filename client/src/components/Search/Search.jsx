import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, resetFilters } from "../../redux/actions";
import styles from "./Search.module.css";

export default function Search() {
  const dispatch = useDispatch();
  const [pokemonByName, setPokemonByName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    pokemonByName && dispatch(getPokemonByName(pokemonByName));
  };

  const handleChange = (e) => {
    setPokemonByName(e.target.value);
    pokemonByName.length === 1 && dispatch(resetFilters());
  };

  return (
    <form className={styles["form"]} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        placeholder="Search for pokemons..."
        type="text"
        className={styles["input"]}
      />
      <input type="submit" value="Search" className={styles["btn"]} />
    </form>
  );
}
