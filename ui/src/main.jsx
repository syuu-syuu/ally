import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import Questionaire from "./stepper.jsx";
import Splash from "./splash.jsx";
import DataBase from "./database.jsx";

function MainApp() {
  return (
    <div className="slide">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/form" element={<Questionaire />} />
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
