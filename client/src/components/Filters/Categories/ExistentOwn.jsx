import React, { useState } from "react";
import styles from "./ExistentOwn.module.css";

const ExistentOwn = () => {
  const [isActive, setIsActive] = useState(false);

  const options = ["All", "Existent", "Own"];

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
        <div className={styles["accordion-content"]}>
          {options.map((o, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  type="checkbox"
                  className={styles["checkbox"]}
                  name={o}
                  id={`${o}-${index}`}
                />
                <label
                  htmlFor={`${o}-${index}`}
                  className={styles["btn-types"]}
                >
                  {o}
                </label>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExistentOwn;
