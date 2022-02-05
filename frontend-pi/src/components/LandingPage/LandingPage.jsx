import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";

import styles from "./LandingPage.module.css";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());

    return () => {
      // cleanup;
    };
  }, [dispatch]);

  return (
    <div className={styles["bg"]}>
      <div className={`ubuntu ${styles["container-landing"]}`}>
        <div>
          <h1 className={styles["h1-landing"]}>
            Pokemon <span className={styles["text-wiki"]}>WiKi</span>
          </h1>
        </div>
        <div>
          <p className={styles["text-landing"]}>
            &#128075; Hi! click{" "}
            <Link to="/home" className={styles["plain-link"]}>
              here
            </Link>
            . Welcome to the <b>Pokemon World</b>.
          </p>
        </div>
      </div>
    </div>
  );
}
