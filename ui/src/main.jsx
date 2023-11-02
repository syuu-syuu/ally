import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import OurStepper from "./stepper.jsx";
import Header from "./header.jsx";
import "./header.css";
import Test from "./text.jsx";
import DataBase from "./database.jsx";

function MainApp() {
  return (
    <div className="slide">
      <Routes>
        <Route
          path="/form"
          element={
            <div>
              <Header />
              <div className="slide">
                <div className="overlap">
                  <OurStepper />
                </div>
                <div>
                  <Test />
                </div>
              </div>
            </div>
          }
        />
        <Route path="/database" element={<DataBase />} />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MainApp />
    </Router>
  </React.StrictMode>
);
