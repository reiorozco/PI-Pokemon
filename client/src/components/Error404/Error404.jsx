import React from "react";
import styles from "./Error404.module.scss";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className={styles["div-center"]}>
      <h1>404</h1>
      <h2>UH OH! You're lost.</h2>
      <p>
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the homepage.
      </p>
      <Link to={"/"}>
        <button className={`${styles["btn"]} ${styles["green"]}`}>HOME</button>
      </Link>
      <p>ERR: Page Not Found</p>
    </div>
  );
}

export default Error404;
