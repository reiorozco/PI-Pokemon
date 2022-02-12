import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByOrigin } from "../../../redux/actions";
import styles from "./ExistentOwn.module.css";

const ExistentOwn = ({ existentOrOwn, handleChangeExistentOwn }) => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const options = ["Existent", "Own"];

  useEffect(() => {
    dispatch(filterByOrigin(existentOrOwn));

    // return () => {};
  }, [dispatch, existentOrOwn]);

  return (
    <div className={styles["accordion-item"]}>
      <div
        className={styles["accordion-title"]}
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <b>Existent/Own</b>
        </div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <form
          id="formFilters"
          onChange={(e) => handleChangeExistentOwn(e)}
          className={styles["accordion-content"]}
        >
          <input
            type="radio"
            className={styles["radio"]}
            name="ExistentOwn"
            value="All"
            id="All-0"
            defaultChecked
          />
          <label htmlFor="All-0" className={styles["btn-types"]}>
            All
          </label>
          {options.map((o, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  className={styles["radio"]}
                  name="ExistentOwn"
                  value={o}
                  id={`${o}-${index + 1}`}
                />
                <label
                  htmlFor={`${o}-${index + 1}`}
                  className={styles["btn-types"]}
                >
                  {o}
                </label>
              </React.Fragment>
            );
          })}
        </form>
      )}
    </div>
  );
};

export default ExistentOwn;
