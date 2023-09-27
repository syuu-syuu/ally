import React from "react";
import ReactDOM from "react-dom";
import OurStepper from "./stepper.jsx";
import Header from "./header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Header />
      <OurStepper />
    </div>
  </React.StrictMode>
);
