import React from "react";
import styles from "../styles/PrivateStyles.module.css";

const PrivatePage = () => {
  return (
    <div className={styles.privatePage}>
      <h1 className={styles.title}>Página Privada</h1>
      <p className={styles.message}>
        ¡Bienvenido a la sección privada de nuestra aplicación! Solo puedes
        acceder a esta página si has iniciado sesión.
      </p>
      <p className={styles.note}>
        Explora contenido exclusivo y disfruta de funcionalidades que solo están
        disponibles para usuarios autenticados.
      </p>
    </div>
  );
};

export default PrivatePage;
