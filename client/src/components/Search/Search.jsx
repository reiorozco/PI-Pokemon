import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, resetFilters } from "../../redux/actions";
import styles from "./Search.module.css";

export default function Search({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [pokemonByName, setPokemonByName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    document
      .querySelectorAll("#formFilters")
      .forEach((element) => element.reset());

    pokemonByName && dispatch(getPokemonByName(pokemonByName));

    setCurrentPage(1);
  };

  const handleChange = (e) => {
    setPokemonByName(e.target.value);
  };

  useEffect(() => {
    pokemonByName.length ||
      (() => {
        dispatch(resetFilters());
        setCurrentPage(1);
      })();

    // return () => {};
  }, [dispatch, pokemonByName, setCurrentPage]);

  return (
    <form id="search-bar" className={styles["form"]} onSubmit={handleSubmit}>
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
