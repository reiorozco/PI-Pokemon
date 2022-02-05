import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import loader from "../../images/loading-image.gif";

import styles from "./Home.module.css";

let pageSize = 9;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  // const dispatch = useDispatch();
  // const types = useSelector((state) => state.types);
  const pokemons = useSelector((state) => state.pokemons);
  const allPokemons = useSelector((state) => state.allPokemons);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return (pokemons.length ? pokemons : allPokemons).slice(
      firstPageIndex,
      lastPageIndex
    );
  }, [allPokemons, currentPage, pokemons]);

  return (
    <div>
      <div className={styles["text-center"]}>
        <h1 className={styles["home-text"]}>Pokemons</h1>
      </div>

      <Search setCurrentPage={setCurrentPage} />

      <div className={styles["container"]}>
        <div>
          <Filters setCurrentPage={setCurrentPage} />
        </div>
        <div className={styles["container-cards"]}>
          {currentTableData.length > 0 ? (
            currentTableData.map((p, index) => {
              return p === "noData" ? (
                <h1 key={index} style={{ gridColumn: "none" }}>
                  We didn't find any Pokémon created by you, click Create
                  Pokémon :{")"}
                </h1>
              ) : typeof p === "string" ? (
                <h1 key={index} style={{ gridColumn: "none" }}>
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
            })
          ) : (
            <img
              src={loader}
              alt="loader"
              style={{
                gridColumnStart: "2",
                gridRowStart: "2",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          )}
        </div>
      </div>

      <Pagination
        className={styles["pagination-bar"]}
        currentPage={currentPage}
        totalCount={pokemons.length || allPokemons.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
