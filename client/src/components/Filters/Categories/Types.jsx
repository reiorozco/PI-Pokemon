import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByType } from "../../../redux/actions";
import styles from "./Types.module.css";

const Types = ({
  arrayTypes,
  handleChangeTypes,
  currentTypes,
  checked,
  handleChecked,
}) => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

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
          onChange={(e) => handleChangeTypes(e)}
          className={styles["accordion-content"]}
        >
          {currentTypes.map((t, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => handleChecked(index)}
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
