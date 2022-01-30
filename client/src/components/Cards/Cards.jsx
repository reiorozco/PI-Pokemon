import React from "react";
import styles from "./Cards.module.css";
import { Link } from "react-router-dom";
import randomImage from "../../images/random-image.png";

export default function Cards({ img, id, name, types }) {
  const numberId = id.toString().padStart(3, "0");

  const colours = {
    normal: "#A8A77Aaa",
    fire: "#EE8130aa",
    water: "#6390F0aa",
    electric: "#F7D02Caa",
    grass: "#7AC74Caa",
    ice: "#96D9D6aa",
    fighting: "#C22E28aa",
    poison: "#A33EA1aa",
    ground: "#E2BF65aa",
    flying: "#A98FF3aa",
    psychic: "#F95587aa",
    bug: "#A6B91Aaa",
    rock: "#B6A136aa",
    ghost: "#735797aa",
    dragon: "#6F35FCaa",
    dark: "#705746aa",
    steel: "#B7B7CEaa",
    fairy: "#D685ADaa",
  };

  return (
    <div className={styles["cards"]}>
      <Link to={`/home/${id}`}>
        <img src={img || randomImage} alt="sprites" className={styles["img"]} />
      </Link>

      <div className={styles["div-description"]}>
        <span className={styles["div-id"]}>
          {numberId.length > 10 ? "CREATED" : `N. °${numberId}`}
        </span>
        <h1 className={styles["div-name"]}>{name}</h1>
        <div className={styles["div-types"]}>
          {types.length ? (
            types.map((t, index) => {
              return (
                <button
                  key={index}
                  style={{ backgroundColor: `${colours[t]}` }}
                  className={styles["types"]}
                >
                  {t}
                </button>
              );
            })
          ) : (
            <button
              style={{ backgroundColor: `${colours["unknown"]}` }}
              className={styles["types"]}
            >
              unknown
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
