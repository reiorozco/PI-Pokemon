import React from "react";
import Search from "../Search/Search";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles["text-center"]}>
        <h1 className={styles["home-text"]}>Pokemons</h1>
      </div>

      <Search />
    </div>
  );
}
