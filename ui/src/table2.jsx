import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Header from "./header";
import "./database.css";
import TextField from "@mui/material/TextField"; // Added this line

function DataBase() {
  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/database");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          if (data && data.savedData) {
            const formattedData = data.savedData.map((item, index) => ({
              ...item,
              id: index, // Using index as the ID
              Timestamp: new Date(item.Timestamp).toLocaleString(),
            }));
            setRows(formattedData);
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
  const columns = [
    { field: "CompanyName", headerName: "Company Name", width: 250 },
    { field: "Contact Info", headerName: "Contact Info", width: 200 },
    { field: "NAICS Code(s)", headerName: "NAICS Code(s)", width: 120 },
    { field: "Annual Revenue", headerName: "Annual Revenue", width: 150 },
    {
      field: "Geographical Coverage Area",
      headerName: "Geographical Coverage Area",
      width: 250,
    },
    {
      field: "Number of Employees",
      headerName: "Number of Employees",
      width: 180,
    },
    {
      field: "Diversity Council Affiliation",
      headerName: "Diversity Council Affiliation",
      width: 220,
    },
    {
      field: "Timestamp",
      headerName: "Timestamp",
      width: 180,
    },
    // {
    //   field: "Please provide an overview of your company.",
    //   headerName: "Company Overview",
    //   width: 300,
    // },
    // {
    //   field: "What is your business's specialty, or niche?",
    //   headerName: "Business Specialty",
    //   width: 300,
    // },
    // {
    //   field: "Please elaborate on potential future engagement.",
    //   headerName: "Future Engagement",
    //   width: 300,
    // },
  ];

  const filteredRows = rows.filter((row) => {
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="stepper-header">
        <p className="stepper-title">Ally Supplier Database</p>
        <p className="stepper-msg">Ally Supplier Details.</p>
      </div>

      <div className="table-container">
        <div className="searchbar">
          <TextField
            id="search-field"
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            size="small"
            sx={{ mb: 2 }}
          />
        </div>

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0
                ? "row-even"
                : "row-odd"
            }
          />
        </Box>
      </div>
    </div>
  );
}

export default DataBase;
