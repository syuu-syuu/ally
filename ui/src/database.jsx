import React, { useState, useEffect } from "react";
import "./database.css";

function DataBase() {
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/database");
        if (response.ok) {
          const data = await response.json();
          if (data && data.savedData) {
            setSavedData(data.savedData);
          }
        } else {
          console.error(
            "Error fetching data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(savedData);
  }, [savedData]);

  const columnHeaders = savedData.length ? Object.keys(savedData[0]) : [];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columnHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {savedData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={typeof cell === "number" ? "number-cell" : ""}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataBase;
