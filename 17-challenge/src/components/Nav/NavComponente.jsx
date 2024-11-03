import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/NavStyles.module.css";

const NavComponente = () => {
  const list = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Login", path: "/login" },
  ];

  return (
    <nav className={styles.nav_menu}>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavComponente;
