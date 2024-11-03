import React from "react";
import "../styles/LoginStyles.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Iniciar Sesión</h1>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
        />
        <button className="login-button">Ingresar</button>
      </div>
    </div>
  );
};

export default LoginPage;
