import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivatePage from "./pages/PrivatePage";
import NavComponent from "./components/NavComponent";

import PrivateRoute from "./utils/PrivateRoute";
import { useAuth } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/private" element={<PrivatePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

const AppWithRouter = () => {
  const location = useLocation();
  const { dispatch } = useAuth();

  useEffect(() => {
    if (location.pathname !== "/login") {
      dispatch({ type: "SET_LAST_PAGE", payload: location.pathname });
      return;
    }
  }, [location.pathname, dispatch]);

  return <App />;
};

const MainApp = () => (
  <Router>
    <AppWithRouter />
  </Router>
);

export default MainApp;
