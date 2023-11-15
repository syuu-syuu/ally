import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyTableComponent() {
  const [fields, setFields] = useState([
    {
      key: "last_name",
      sortable: true,
    },
    {
      key: "first_name",
      sortable: false,
    },
    {
      key: "age",
      label: "Person age",
      sortable: true,
      // In React, you will handle the variant by applying a class conditionally
    },
  ]);

  const [items, setItems] = useState([
    {
      isActive: true,
      age: 40,
      first_name: "Dickerson",
      last_name: "Macdonald",
    },
    { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
    { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
    { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
  ]);

  return (
    <Table striped hover>
      <thead>
        <tr>
          {fields.map((field) => (
            <th key={field.key} className={field.key === "age" ? "danger" : ""}>
              {field.label || field.key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            {fields.map((field) => (
              <td
                key={field.key}
                className={field.key === "age" ? "danger" : ""}
              >
                {item[field.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MyTableComponent;
