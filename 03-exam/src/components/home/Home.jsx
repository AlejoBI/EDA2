import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.welcomeText}>Welcome to the App!</h1>
      <p className={styles.introText}>
        Select a section from the navigation bar to get started.
      </p>
    </div>
  );
}

export default Home;
