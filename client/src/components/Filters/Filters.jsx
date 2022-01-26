import React, { useState } from "react";
import ExistentOwn from "./Categories/ExistentOwn";
import OrderBy from "./Categories/OrderBy";
import Types from "./Categories/Types";
import styles from "./Filters.module.css";

export default function Filters({ setCurrentPage }) {
  const [arrayTypes, setArrayTypes] = useState([]);
  const [existentOrOwn, setExistentOrOwn] = useState("");
  const [order, setOrder] = useState("");

  const handleChangeTypes = (e) => {
    let array;

    arrayTypes.indexOf(e.target.name) !== -1
      ? (array = arrayTypes.filter((f) => f !== e.target.name))
      : (array = [...arrayTypes, e.target.name]);

    setArrayTypes(array);
    setCurrentPage(1);
  };

  const handleChangeExistentOwn = (e) => {
    let option;

    option = e.target.value;

    setExistentOrOwn(option);
    setCurrentPage(1);
  };

  const handleChangeOrder = (e) => {
    let order;

    order = e.target.value;

    setOrder(order);
    setCurrentPage(1);
  };

  const handleClick = () => {
    setArrayTypes([]);
    setExistentOrOwn("");
    setOrder("");
    setCurrentPage(1);

    document
      .querySelectorAll("#formFilters")
      .forEach((element) => element.reset());
  };

  return (
    <div style={{ position: "sticky", top: "20px" }}>
      <div className={styles["filters-head"]}>
        <h1 className={styles["h1-filters"]}>Filters</h1>
        <button onClick={handleClick} className={styles["btn-filter"]}>
          Clear Filters
        </button>
      </div>

      <div className={styles["filters"]}>
        <Types arrayTypes={arrayTypes} handleChangeTypes={handleChangeTypes} />
        <ExistentOwn
          existentOrOwn={existentOrOwn}
          handleChangeExistentOwn={handleChangeExistentOwn}
        />
        <OrderBy order={order} handleChangeOrder={handleChangeOrder} />
      </div>
    </div>
  );
}
