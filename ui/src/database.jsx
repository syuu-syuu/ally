import React, { useState, useEffect } from "react";
import Header from "./header";
import "./database.css";

function DataBase() {
  const [savedData, setSavedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from the database everytime the page is rendered.
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

  // Print the data retrived from the database whenever the data is updated.
  useEffect(() => {
    console.log(savedData);
  }, [savedData]);

  // Search & filter
  useEffect(() => {
    let data = [...savedData];
    if (searchTerm) {
      data = data.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    if (sortConfig.key) {
      data.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredData(data);
  }, [savedData, sortConfig, searchTerm]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();

    const month = (date.getMonth() + 1).toString().padStart(2, "0");

    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  // const columnHeaders = savedData.length ? Object.keys(savedData[0]) : [];
  const displayColumnOrder = [
    "CompanyName",
    "Contact Info",
    "Number of Employees",
    "Annual Revenue",
    "NAICS Code(s)",
    "Geographical Coverage Area",
    "Diversity Council Affiliation",
    "Timestamp",
  ];

  // const displayColumnOrder = [
  //   "Supplier Name",
  //   "Existing Supplier",
  //   "Opportunity Category",
  //   "Spend Potential",
  //   "Existing Spend",
  //   "Contact Name",
  //   "Email",
  //   "Phone Number",
  // ];

  const columnHeaders = savedData.length
    ? displayColumnOrder.filter((header) => header in savedData[0])
    : [];

  const getSortDirectionSymbol = (header) => {
    if (sortConfig.key === header) {
      return sortConfig.direction === "ascending" ? " 🔼" : " 🔽";
    }
    return " ⇅";
  };
  return (
    <div>
      <Header />
      <div className="content">
        <div className="title">Ally Supplier Database</div>
        <div className="text-wrapper">Ally Supplier Details</div>
        {/* <p className="text-wrapper">
          Please fill the following with the best of your knowledge.
        </p> */}

        <div className="table-container">
          <input
            type="text"
            placeholder="search..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />

          <table>
            <thead>
              <tr>
                <th> {}</th>
                {columnHeaders.map((header) => (
                  <th key={header} onClick={() => requestSort(header)}>
                    {header} {getSortDirectionSymbol(header)}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  {columnHeaders.map((header, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={
                        typeof row[header] === "number" ? "number-cell" : ""
                      }
                    >
                      {header === "Timestamp"
                        ? formatDate(row[header])
                        : row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataBase;
