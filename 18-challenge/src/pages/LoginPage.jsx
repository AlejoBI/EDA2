import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/LoginStyles.css";

const LoginPage = () => {
  const { dispatch, state } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const lastPage = location.state?.from?.pathname || state.lastPage || "/";

  const handleLogin = () => {
    dispatch({ type: "LOGIN", payload: { username: "UsuarioFake" } });
    dispatch({ type: "SET_LAST_PAGE", payload: lastPage });
    navigate(lastPage, { replace: true });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Iniciar Sesión</h1>
      <button className="login-button" onClick={handleLogin}>
        Iniciar Sesión
      </button>
    </div>
  );
};

export default LoginPage;
