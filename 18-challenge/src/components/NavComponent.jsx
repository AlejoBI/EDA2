import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/NavStyles.module.css";

const NavComponent = () => {
  const { state, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const list = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Private", path: "/private" },
  ];

  return (
    <nav className={styles.nav_menu}>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Link to={item.path} className={styles.nav_link}>
              {item.name}
            </Link>
          </li>
        ))}
        {!state.isAuthenticated && (
          <li>
            <Link to="/login" className={styles.nav_link}>
              Login
            </Link>
          </li>
        )}
        {state.isAuthenticated && (
          <>
            <li>
              <button onClick={handleLogout} className={styles.logout_button}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavComponent;
