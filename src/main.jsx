import React from "react";
import ReactDOM from "react-dom/client";
import Stepper from "./stepper.jsx";
import Header from "./header.jsx";
import "./header.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="slide">
      <Header />
      <div className="overlap">
        <Stepper />
      </div>
    </div>
  </React.StrictMode>
);
