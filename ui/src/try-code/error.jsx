import React from "react";
// import "./error.css";

function ErrorPage({ message }) {
  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>{message}</p>
      <p>Please try again later.</p>
    </div>
  );
}

export default ErrorPage;
