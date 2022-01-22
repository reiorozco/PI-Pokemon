import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";

import Search from "../Search/Search";
import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const allPokemons = useSelector((state) => state.allPokemons);
  const types = useSelector((state) => state.types);

  return (
    <div>
      <div className={styles["text-center"]}>
        <h1 className={styles["home-text"]}>Pokemons</h1>
      </div>

      <Search />
      <div className={styles["container"]}>
        <div>
          <Filters />
        </div>
        <div className={styles["container-cards"]}>
          {allPokemons?.map((p) => {
            return (
              <Cards
                key={p.id}
                img={p.img}
                id={p.id}
                name={p.name}
                types={p.types}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
