import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import Questionaire from "./stepper.jsx";
import Header from "./header.jsx";
import "./header.css";
import Test from "./text.jsx";
import Stepper from "./try-stepper.jsx";
import DataBase from "./database.jsx";

function MainApp() {
  return (
    <div className="slide">
      <Routes>
        <Route path="/form" element={<Questionaire />} />
        <Route path="/database" element={<DataBase />} />
      </Routes>
    </div>
  );
}

// {
//     path: '/prompts/:id',
//     element: <div><PromptPage></PromptPage></div>,
//   },

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MainApp />
    </Router>
  </React.StrictMode>
);
