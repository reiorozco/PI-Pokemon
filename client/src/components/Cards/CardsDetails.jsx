import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./CardsDetails.module.css";
import randomImage from "../../images/random-image.png";

function CardsDetails() {
  performance.getEntriesByType("navigation")[0].type === "reload" &&
    window.location.replace("/error404");

  const allPokemons = useSelector((state) => state.allPokemons);
  const details = useSelector((state) => state.details);
  const { id } = useParams();

  const pokemonById =
    allPokemons.filter(
      (p) => p.id === (id.length > 10 ? id : parseInt(id))
    )[0] || details[0];

  const numberId = id.padStart(3, "0");
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
    <div className={styles["container-details"]}>
      <div className={styles["border-details"]}>
        <h2 className="">{`${pokemonById.name} ${
          numberId.length > 10 ? "CREATED" : `N. °${numberId}`
        }`}</h2>

        <div className={styles["details"]}>
          <img
            src={pokemonById.img || randomImage}
            alt="sprites"
            className={styles["img"]}
          />

          <div className={styles["data-details"]}>
            <div className={styles["data-details--grid"]}>
              <div>
                <h4>Height</h4>
                <div>
                  {typeof pokemonById.height === "number"
                    ? `${pokemonById.height} m`
                    : pokemonById.height}
                </div>
              </div>

              <div>
                <h4>Category</h4>
                <div>{pokemonById.category || "Unknown"}</div>
              </div>

              <div>
                <h4>Weight</h4>
                <div>
                  {typeof pokemonById.weight === "number"
                    ? `${pokemonById.weight} kg`
                    : pokemonById.weight}
                </div>
              </div>

              <div>
                <h4>Ability</h4>
                <div>{pokemonById.ability || "Unknown"}</div>
              </div>

              <div>
                <h4>Gender</h4>
                <div>{pokemonById.gender || "Male or Female"}</div>
              </div>
            </div>

            <h4>Types</h4>
            <div className={styles["div-types"]}>
              {pokemonById.types.length ? (
                pokemonById.types.map((t, index) => {
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

        <div className={styles["stats-grid"]}>
          <div className={styles["stats-data"]}>
            <div className={styles["stats-title"]}>
              <h3 className={styles["stats-name"]}>Health</h3>
              <span
                className={styles["stats-number"]}
              >{`${pokemonById.health}%`}</span>
            </div>
            <div className={styles["stats-bar"]}>
              <span
                className={styles["stats-percentage"]}
                style={{ width: `${pokemonById.health}%` }}
              />
            </div>
          </div>

          <div className={styles["stats-data"]}>
            <div className={styles["stats-title"]}>
              <h3 className={styles["stats-name"]}>Attack</h3>
              <span className={styles["stats-number"]}>
                {`${pokemonById.attack}%`}
              </span>
            </div>
            <div className={styles["stats-bar"]}>
              <span
                className={styles["stats-percentage"]}
                style={{ width: `${pokemonById.attack}%` }}
              />
            </div>
          </div>

          <div className={styles["stats-data"]}>
            <div className={styles["stats-title"]}>
              <h3 className={styles["stats-name"]}>Defense</h3>
              <span className={styles["stats-number"]}>
                {`${pokemonById.defense}%`}
              </span>
            </div>
            <div className={styles["stats-bar"]}>
              <span
                className={styles["stats-percentage"]}
                style={{ width: `${pokemonById.defense}%` }}
              />
            </div>
          </div>

          <div className={styles["stats-data"]}>
            <div className={styles["stats-title"]}>
              <h3 className={styles["stats-name"]}>Speed</h3>
              <span className={styles["stats-number"]}>
                {`${pokemonById.speed}%`}
              </span>
            </div>
            <div className={styles["stats-bar"]}>
              <span
                className={styles["stats-percentage"]}
                style={{ width: `${pokemonById.speed}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsDetails;
