import React from "react";
import ReactDOM from "react-dom/client";
import OurStepper from "./stepper.jsx";
import Header from "./header.jsx";
import "./header.css";
import App from "./app.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="slide">
      <Header />
      <div className="overlap">
        <OurStepper />
      </div>
      <div>
        <App />
      </div>
    </div>
  </React.StrictMode>
);
