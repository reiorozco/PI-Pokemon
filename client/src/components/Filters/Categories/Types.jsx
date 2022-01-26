import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByType } from "../../../redux/actions";
import styles from "./Types.module.css";

const Types = () => {
  const [isActive, setIsActive] = useState(false);
  const [arrayTypes, setArrayTypes] = useState([]);

  const allPokemons = useSelector((state) => state.allPokemons);
  const dispatch = useDispatch();

  const currentTypes = useMemo(
    () => [...new Set(allPokemons.map((t) => t.types).flat())],
    [allPokemons]
  );

  const handleChange = (e) => {
    let array;

    arrayTypes.indexOf(e.target.name) !== -1
      ? (array = arrayTypes.filter((f) => f !== e.target.name))
      : (array = [...arrayTypes, e.target.name]);

    setArrayTypes(array);
  };

  useEffect(() => {
    dispatch(filterByType(arrayTypes));

    // return () => {};
  }, [arrayTypes, dispatch]);

  return (
    <div className={styles["accordion-item"]}>
      <div
        className={styles["accordion-title"]}
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <b>Types</b>
        </div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <form
          id="formTypes"
          onChange={handleChange}
          className={styles["accordion-content"]}
        >
          {currentTypes.map((t, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  type="checkbox"
                  className={styles["checkbox"]}
                  name={t}
                  id={`${t}-${index}`}
                />
                <label
                  htmlFor={`${t}-${index}`}
                  className={styles["btn-types"]}
                >
                  {t}
                </label>
              </React.Fragment>
            );
          })}
        </form>
      )}
    </div>
  );
};

export default Types;
