import "./success.css";
import React from "react";

function SuccessPage({ data }) {
  const { message, savedData } = data;
  return (
    <div>
      <h3>{message}</h3>
      <p>Here is the data you submitted:</p>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(savedData).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SuccessPage;
