import React, { useMemo, useState } from "react";
import ExistentOwn from "./Categories/ExistentOwn";
import OrderBy from "./Categories/OrderBy";
import Types from "./Categories/Types";
import styles from "./Filters.module.css";
import { useSelector } from "react-redux";

export default function Filters({ setCurrentPage }) {
  const [arrayTypes, setArrayTypes] = useState([]);
  const [existentOrOwn, setExistentOrOwn] = useState("");
  const [order, setOrder] = useState("");
  const [checkedExOwn, setCheckedExOwn] = useState("All");
  const [checkedOrder, setCheckedOrder] = useState("Number ID");

  const allPokemons = useSelector((state) => state.allPokemons);

  const currentTypes = useMemo(
    () => [...new Set(allPokemons.map((t) => t.types).flat())],
    [allPokemons]
  );

  const [checked, setChecked] = useState(
    new Array(currentTypes.length).fill(false)
  );

  function handleChecked(position) {
    const updatedChecked = checked.map((item, index) =>
      index === position ? !item : item
    );

    setChecked(updatedChecked);
  }

  function resetSearchBar() {
    document.getElementById("search-bar").reset();
  }

  const handleChangeTypes = (e) => {
    resetSearchBar();

    let array;

    arrayTypes.indexOf(e.target.name) !== -1
      ? (array = arrayTypes.filter((f) => f !== e.target.name))
      : (array = [...arrayTypes, e.target.name]);

    setArrayTypes(array);
    setCurrentPage(1);
  };

  function handleCheckedExOwn(e) {
    setCheckedExOwn(e.target.value);
  }

  const handleChangeExistentOwn = (e) => {
    resetSearchBar();

    let option;

    option = e.target.value;

    setExistentOrOwn(option);
    setCurrentPage(1);
  };

  function handleCheckedOrder(e) {
    setCheckedOrder(e.target.value);
  }

  const handleChangeOrder = (e) => {
    resetSearchBar();

    let order;

    order = e.target.value;

    setOrder(order);
    setCurrentPage(1);
  };

  const handleClick = () => {
    setArrayTypes([]);
    setExistentOrOwn("");
    setOrder("");
    setChecked(new Array(currentTypes.length).fill(false));
    setCheckedExOwn("All");
    setCheckedOrder("Number ID");
    setCurrentPage(1);
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
        <Types
          arrayTypes={arrayTypes}
          handleChangeTypes={handleChangeTypes}
          currentTypes={currentTypes}
          checked={checked}
          handleChecked={handleChecked}
        />
        <ExistentOwn
          existentOrOwn={existentOrOwn}
          handleChangeExistentOwn={handleChangeExistentOwn}
          checkedExOwn={checkedExOwn}
          handleCheckedExOwn={handleCheckedExOwn}
        />
        <OrderBy
          order={order}
          handleChangeOrder={handleChangeOrder}
          checkedOrder={checkedOrder}
          handleCheckedOrder={handleCheckedOrder}
        />
      </div>
    </div>
  );
}
