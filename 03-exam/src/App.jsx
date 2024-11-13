import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, MultipleCustomHooks, TodoApp, Navbar } from "./components/index";

import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<MultipleCustomHooks />} />
            <Route path="/todo" element={<TodoApp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
