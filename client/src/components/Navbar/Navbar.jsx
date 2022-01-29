import React from "react";
import { Link, Outlet } from "react-router-dom";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={`ubuntu ${styles["topnav"]}`}>
        <h1 className={styles["h1-navbar"]}>
          <Link to="/home" className={styles["link-home"]}>
            Pokemon <span className={styles["text-wiki"]}>WiKi</span>
          </Link>
        </h1>

        <button className={styles["btn"]}>
          <Link to="/home/new-pokemon">Create Pokemon</Link>
        </button>
      </div>
      <Outlet />
    </>
  );
}
