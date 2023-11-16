import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import Questionaire from "./stepper.jsx";

import DataBase from "./database.jsx";
// import "./header.css";
// import MyComponent from "./try.jsx";

function MainApp() {
  return (
    <div className="slide">
      <Routes>
        <Route path="/form" element={<Questionaire />} />
        <Route path="/database" element={<DataBase />} />
        {/* <Route path="/try" element={<MyComponent />} /> */}
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
