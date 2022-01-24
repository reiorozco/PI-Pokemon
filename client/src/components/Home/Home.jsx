import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";

import styles from "./Home.module.css";

let PageSize = 9;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const allPokemons = useSelector((state) => state.allPokemons);
  const types = useSelector((state) => state.types);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allPokemons.slice(firstPageIndex, lastPageIndex);
  }, [allPokemons, currentPage]);

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
          {(pokemons.length ? pokemons : currentTableData).map((p) => {
            return typeof p === "string" ? (
              <h1 style={{ gridColumn: "none" }}>
                Pokemon with the name {p} was not found :/
              </h1>
            ) : (
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

      <Pagination
        className={styles["pagination-bar"]}
        currentPage={currentPage}
        totalCount={pokemons.length || allPokemons.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
