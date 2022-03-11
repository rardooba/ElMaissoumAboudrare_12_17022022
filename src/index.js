/**
 * @file index.js is the render file of the application
 * @author Rardooba
 * @see <a href="https://github.com/rardooba/ElMaissoumAboudrare_12_17022022" target="_blank">Repo Git</a>
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./Pages/Home";

import App from "./App";
import Dashboard from "./Pages/Dashboard";
import NotFound404 from "./Pages/404";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="user/:id" element={<Dashboard />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);