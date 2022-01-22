import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Types.module.css";

const Types = () => {
  const [isActive, setIsActive] = useState(false);

  const types = useSelector((state) => state.types);

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
        <div className={styles["accordion-content"]}>
          {types.map((t, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  type="checkbox"
                  className={styles["checkbox"]}
                  name={t.name}
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
      )}
    </div>
  );
};

export default Types;
