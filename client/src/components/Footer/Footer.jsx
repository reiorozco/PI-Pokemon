import React from "react";
import styles from "../Footer/Footer.module.css";
import logoLinkedIn from "../../images/linkedin.png";
import logoGithub from "../../images/github.png";

const Footer = () => {
  return (
    <footer className={styles["topnav"]}>
      <div className={styles["footer-p"]}>
        <p>© 2022 Rei Orozco</p>
      </div>
      <div className={styles["icons-media"]}>
        <a href="https://github.com/reiorozco" target={"blank"}>
          <img src={logoGithub} alt="logoGithub" />
        </a>

        <a href="https://www.linkedin.com/in/reiorozco/" target={"blank"}>
          <img src={logoLinkedIn} alt="logoLinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
