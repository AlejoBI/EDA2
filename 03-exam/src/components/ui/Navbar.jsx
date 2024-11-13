import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navLink} to="/">
        <h1 className={styles.navTitle}>App</h1>
      </Link>
      <Link className={styles.navLink} to="/pokemon">
        Pokémon
      </Link>
      <Link className={styles.navLink} to="/todo">
        To-Do
      </Link>
    </nav>
  );
}

export default Navbar;
