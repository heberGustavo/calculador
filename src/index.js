import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Calculator from "./main/Calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>My Calculator</h1>
    <Calculator />
  </React.StrictMode>
);

reportWebVitals();
