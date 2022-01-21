import React from "react";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <form className={styles["form"]}>
      <input
        onChange={(e) => {}}
        placeholder="Search for pokemons..."
        type="text"
        className={styles["input"]}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={styles["btn"]}
      >
        Search
      </button>
    </form>
  );
}
