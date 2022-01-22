import React, { useState } from "react";
import styles from "./OrderBy.module.css";

const OrderBy = () => {
  const [isActive, setIsActive] = useState(false);

  const options = ["High Attack", "Less Attack", "A-Z", "Z-A"];

  return (
    <div className={styles["accordion-item"]}>
      <div
        className={styles["accordion-title"]}
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <b>Order By</b>
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

export default OrderBy;
