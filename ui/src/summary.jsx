import React from "react";

function Summary({ formData }) {
  return (
    <div className="summary">
      <h3>Final Output</h3>
      {Object.entries(formData).map(([key, value], index) => (
        <div key={index}>
          <strong>{key.replace(/([A-Z])/g, " $1").trim()}:</strong>{" "}
          {Array.isArray(value) ? value.join(", ") : value}
        </div>
      ))}
    </div>
  );
}

export default Summary;
