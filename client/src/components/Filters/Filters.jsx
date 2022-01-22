import React from "react";
import ExistentOwn from "./Categories/ExistentOwn";
import OrderBy from "./Categories/OrderBy";
import Types from "./Categories/Types";
import styles from "./Filters.module.css";

export default function Filters() {
  return (
    <div>
      <div className={styles["filters-head"]}>
        <h1 className={styles["h1-filters"]}>Filters</h1>
        <button className={styles["btn-filter"]}>Clear Filters</button>
      </div>

      <div className={styles["filters"]}>
        <Types />
        <ExistentOwn />
        <OrderBy />
      </div>
    </div>
  );
}
