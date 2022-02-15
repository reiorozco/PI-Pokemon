import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import limitCheckBox from "./LimitCheckBox";

import styles from "./CreatePokemon.module.css";
import { getPokemons, postPokemon } from "../../redux/actions";

let formInputs = {
  name: "",
  height: 50,
  weight: 50,
  health: 50,
  attack: 50,
  defense: 50,
  speed: 50,
  types: [],
};

export default function CreatePokemon() {
  performance.getEntriesByType("navigation")[0].type === "reload" &&
    window.location.replace("/error404");

  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  // const [formData, setFormData] = useState(formInputs);

  const handleChange = (e) => {
    limitCheckBox();

    e.target.name === "types"
      ? formInputs["types"].indexOf(e.target.value) !== -1
        ? (formInputs = {
            ...formInputs,
            types: formInputs["types"].filter((f) => f !== e.target.value),
          })
        : (formInputs = {
            ...formInputs,
            types: [...formInputs.types, e.target.value],
          })
      : (formInputs = {
          ...formInputs,
          [e.target.name]: e.target.value,
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const answer = window.confirm("Are you sure?");

    function resetForm() {
      document.getElementById("formCreate").reset();
      formInputs = {
        name: "",
        height: 50,
        weight: 50,
        health: 50,
        attack: 50,
        defense: 50,
        speed: 50,
        types: [],
      };
    }

    answer
      ? (() => {
          window.alert("Your Pokemon was saved to the database.");
          dispatch(postPokemon(formInputs));

          resetForm();
        })()
      : (() => {
          window.alert("Your Pokemon wasn't saved to the database.");

          resetForm();
        })();
  };

  useEffect(() => {
    return () => {
      dispatch(getPokemons());
    };
  }, [dispatch]);

  return (
    <div className={styles["containerForm"]}>
      <div className={styles["borderForm"]}>
        <form
          id="formCreate"
          onSubmit={handleSubmit}
          onChange={handleChange}
          className={styles["formCreate"]}
        >
          <header>
            <h2>Your Own Pokemon</h2>
            <p>Insert a name, select its stats and choose the types.</p>
          </header>

          <div>
            <label>Name:</label>
            <br />
            <input
              type="text"
              name="name"
              required
              style={{ borderRadius: "5px" }}
            />
          </div>
          <br />

          <div className={styles["stats"]}>
            <div>
              <label>Height (m):</label>
              <br />
              <input
                type="number"
                name="height"
                defaultValue={50}
                style={{ borderRadius: "5px" }}
              />
            </div>

            <div>
              <label>Weight (kg):</label>
              <br />
              <input
                type="number"
                name="weight"
                defaultValue={50}
                style={{ borderRadius: "5px" }}
              />
            </div>

            <div>
              <label>Health:</label>
              <br />
              <input type="range" name="health" min="0" max="100" step="10" />
            </div>

            <div>
              <label>Attack:</label>
              <br />
              <input type="range" name="attack" min="0" max="100" step="10" />
            </div>

            <div>
              <label>Defense:</label>
              <br />
              <input type="range" name="defense" min="0" max="100" step="10" />
            </div>

            <div>
              <label>Speed:</label>
              <br />
              <input type="range" name="speed" min="0" max="100" step="10" />
            </div>
          </div>
          <br />
          <label>Types:</label>

          <div id="checkboxContent" className={styles["checkbox-content"]}>
            {types.map((t, index) => {
              return (
                <React.Fragment key={index}>
                  <input
                    type="checkbox"
                    className={styles["checkbox"]}
                    value={t.name}
                    name="types"
                    id={`${t.name}-${index}`}
                  />
                  <label
                    htmlFor={`${t.name}-${index}`}
                    className={styles["btn-types"]}
                  >
                    {t.name}
                  </label>
                </React.Fragment>
              );
            })}
          </div>

          <div className={styles["btn-center"]}>
            <input
              type="submit"
              className={styles["btn-filter"]}
              value="Create"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
