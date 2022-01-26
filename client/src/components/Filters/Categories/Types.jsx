import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByType } from "../../../redux/actions";
import styles from "./Types.module.css";

const Types = ({ arrayTypes, handleChangeTypes }) => {
  const [isActive, setIsActive] = useState(false);

  const allPokemons = useSelector((state) => state.allPokemons);
  const dispatch = useDispatch();

  const currentTypes = useMemo(
    () => [...new Set(allPokemons.map((t) => t.types).flat())],
    [allPokemons]
  );

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
          id="formFilters"
          onChange={(e) => handleChangeTypes(e)}
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
