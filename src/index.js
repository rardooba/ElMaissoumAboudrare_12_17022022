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

/*  
TODO >>

1. PropType OK
2. JSDoc + course 
3. Chart design + review Recharts (How I use it ?)
4. Refactory codeBase
5. LifeCycle in React
6. Routes In User Storie

*/
