import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { orderBy } from "../../../redux/actions";
import styles from "./OrderBy.module.css";

const OrderBy = ({ order, handleChangeOrder }) => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const options = ["High Attack", "Less Attack", "A-Z", "Z-A"];

  useEffect(() => {
    dispatch(orderBy(order));

    // return () => {};
  }, [dispatch, order]);

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
        <form
          id="formFilters"
          onChange={(e) => handleChangeOrder(e)}
          className={styles["accordion-content"]}
        >
          <input
            type="radio"
            className={styles["radio"]}
            name="OrderBy"
            value="Number ID"
            id="Number ID-0"
            defaultChecked
          />
          <label htmlFor="Number ID-0" className={styles["btn-types"]}>
            Number ID
          </label>
          {options.map((o, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  className={styles["radio"]}
                  name="OrderBy"
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

export default OrderBy;
