import React from "react";
import ReactDOM from "react-dom/client";
import OurStepper from "./stepper.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="slide">
      <div className="div">
        <div className="content">
          <div className="title">Ally Supplier Overview Questionaire</div>
          <p className="text-wrapper">
            Please fill the following with the best of your knowledge.
          </p>
        </div>

        <div className="group-3">
          <button className="solid-button">
            <div className="overlap-group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="40"
                viewBox="0 0 88 40"
                fill="none"
              >
                <path
                  d="M81.098 0H6.90196C3.09011 0 0 3.58172 0 8V32C0 36.4183 3.09011 40 6.90196 40H81.098C84.9099 40 88 36.4183 88 32V8C88 3.58172 84.9099 0 81.098 0Z"
                  fill="#5F285E"
                />
              </svg>
              <div className="log">Login</div>
            </div>
          </button>
          <div className="group-4">
            <div className="head1">supply diversity</div>
            <div className="box">
              <svg
                className="layer"
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="46"
                viewBox="0 0 83 46"
                fill="none"
              >
                <path d="M31.002 0H39.202V35.714H31.002V0Z" fill="#5F285E" />
                <path d="M43.1138 0H51.3138V35.714H43.1138V0Z" fill="#5F285E" />
                <path
                  d="M53.5449 9.78906H62.4869L67.8869 25.562L73.2869 9.78906H82.2329L68.2609 45.6891H59.3189L63.5929 35.5381L53.5449 9.78906Z"
                  fill="#5F285E"
                />
                <path
                  d="M27.414 22.9407C27.4259 21.1354 27.0862 19.3451 26.414 17.6697C25.7779 16.0701 24.8295 14.6134 23.624 13.3847C22.399 12.1536 20.9455 11.1736 19.345 10.4997C17.6154 9.77167 15.7545 9.4071 13.878 9.42864C5.24299 9.42864 0 15.3816 0 22.9416C0 30.3416 5.97199 36.1307 12.369 36.2847L19.446 28.6647L19.331 28.4756V35.7496H27.415L27.414 22.9407ZM19.301 28.5027L13.732 28.5166C9.91599 28.5166 5.697 23.1716 10 18.9846C13.818 15.2696 19.539 18.3167 19.539 23.4847L19.301 28.5027Z"
                  fill="#5F285E"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="overlap">
          <OurStepper />
        </div>
      </div>
    </div>
  </React.StrictMode>
);
