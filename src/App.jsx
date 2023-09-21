import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // I noticed you are not using this anywhere in your component. You might want to remove it if it's not needed.

  // Step 1: Define the formData state variable.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Step 2: Define the handleChange function.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container">
        <svg
          id="icon"
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

        <svg
          id="button"
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
          <text
            x="50%"
            y="50%"
            dy=".3em"
            fill="white"
            font-size="16"
            font-family="Arial"
            text-anchor="middle"
          >
            Login
          </text>
        </svg>

        <svg
          id="notice"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="35"
          viewBox="0 0 30 35"
          fill="none"
        >
          <path
            d="M28.99 27.8429V29.4529H0V27.8429L3.221 24.6219V14.9629C3.21672 12.533 3.99872 10.167 5.45019 8.21821C6.90165 6.26947 8.94466 4.84264 11.274 4.15089V3.68389C11.274 2.82963 11.6134 2.01035 12.2174 1.4063C12.8215 0.802245 13.6407 0.462891 14.495 0.462891C15.3493 0.462891 16.1685 0.802245 16.7726 1.4063C17.3766 2.01035 17.716 2.82963 17.716 3.68389V4.15089C20.0453 4.84264 22.0884 6.26947 23.5398 8.21821C24.9913 10.167 25.7733 12.533 25.769 14.9629V24.6259L28.99 27.8429ZM17.716 31.0629C17.716 31.9172 17.3766 32.7364 16.7726 33.3405C16.1685 33.9445 15.3493 34.2839 14.495 34.2839C13.6407 34.2839 12.8215 33.9445 12.2174 33.3405C11.6134 32.7364 11.274 31.9172 11.274 31.0629"
            fill="#C8CED0"
          />
          <path
            d="M23.579 12.41C27.0059 12.41 29.784 9.63193 29.784 6.205C29.784 2.77807 27.0059 0 23.579 0C20.1521 0 17.374 2.77807 17.374 6.205C17.374 9.63193 20.1521 12.41 23.579 12.41Z"
            fill="#CE477E"
          />
          <path
            d="M23.5792 11.1682C26.3208 11.1682 28.5432 8.94578 28.5432 6.20423C28.5432 3.46269 26.3208 1.24023 23.5792 1.24023C20.8377 1.24023 18.6152 3.46269 18.6152 6.20423C18.6152 8.94578 20.8377 11.1682 23.5792 11.1682Z"
            fill="#5F285E"
          />
        </svg>
        {/* <svg id='headblock' xmlns="http://www.w3.org/2000/svg" width="1920" height="88" viewBox="0 0 1920 88" fill="none">
      <path d="M0 0L0 88L1920 88V0L0 0Z" fill="white"/>
      </svg> */}

        <p id="headline">supply diversity</p>
        <br></br>

        <form>
          <label class="label" htmlFor="name">
            Company Name :
          </label>
          <input
            class="form"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="ABC Company"
          />

          <label class="label" htmlFor="email">
            Contact Info :
          </label>
          <input
            class="form"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label class="label" htmlFor="email">
            NAICS Code(s) :
          </label>
          <input
            class="form"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label class="label" htmlFor="email">
            Annual Revenue :
          </label>
          <input
            class="form"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label class="label" htmlFor="email">
            Number of Employees :
          </label>
          <input
            class="form"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label class="label" htmlFor="email">
            Geographical Coverage Area :
          </label>
          <input
            class="form"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label class="label" htmlFor="email">
            Diversity Council Affiliation :
          </label>
          <input
            class="form"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
}

export default App;
