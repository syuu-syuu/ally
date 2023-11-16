import React, { useState } from "react";
import GenericField from "./genericField";
import "./form.css";

const steps = [
  // First Step
  {
    fields: [
      {
        type: "input",
        name: "Company Name",
        label: "Company Name",
        placeholder: "ABC Company",
      },
      {
        type: "input",
        name: "Contact Info",
        label: "Contact Info",
        placeholder: "xx-xxxxxxxxx",
      },
      {
        type: "input",
        name: "NAICS Code(s)",
        label: "NAICS Code(s)",
        placeholder: "xxxxxx",
      },
      {
        type: "input",
        name: "Annual Revenue",
        label: "Annual Revenue",
        placeholder: "12344 $",
      },
      {
        type: "input",
        name: "Number of Employees",
        label: "Number of Employees",
        placeholder: "123",
      },
      {
        type: "input",
        name: "Geographical Coverage Area",
        label: "Geographical Coverage Area",
        placeholder: "1234 msq",
      },
      {
        type: "input",
        name: "Diversity Council Affiliation",
        label: "Diversity Council Affiliation",
        placeholder: "NMSDC, WBENC",
      },
    ],
  },
  // Second Step
  {
    fields: [
      {
        type: "textarea",
        name: "Overview",
        label: "Please provide an overview of your company",
        placeholder: "Company overview",
      },
      {
        type: "textarea",
        name: "Business specialty",
        label: "What is your business's specialty, or niche?",
        placeholder: "Niche",
      },
      {
        type: "textarea",
        name: "Potential engagement",
        label: "Please elaborate on potential future engagement",
        placeholder: "Potential engagement",
      },
    ],
  },
  // Third Step
  {
    fields: [
      {
        type: "checkbox",
        name: "relationship",
        label: "Does your business have any existing relationship with Ally?",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" },
        ],
      },
      {
        type: "checkbox",
        name: "Supplier Diversity program",
        label: "Does your company have a Supplier Diversity program?",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" },
        ],
      },
      {
        type: "checkbox",
        name: "businessType",
        label: "Is your business",
        options: [
          { value: "minority-owned", label: "minority-owned" },
          { value: "women-owned", label: "women-owned" },
          { value: "veteran-owned", label: "veteran-owned" },
          { value: "LGBTQ-owned", label: "LGBTQ-owned" },
          { value: "Disability-owned", label: "Disability-owned" },
          { value: "small business", label: "small business" },
        ],
      },
      {
        type: "checkbox",
        name: "contingent labor services",
        label:
          "Does your company offer contingent labor services? (if yes, please complete additional survey opened in browser)",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" },
        ],
      },
    ],
  },
];

function GenericForm({ stepIndex, onFormChange }) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setSelectedCheckboxes((prev) => {
      const updated = new Set(prev[name] || []);
      if (updated.has(value)) {
        updated.delete(value);
      } else {
        updated.add(value);
      }
      return { ...prev, [name]: Array.from(updated) };
    });
  };

  const fields = steps[stepIndex].fields;

  return (
    <form className="form-container">
      {fields.map((field, index) => (
        <GenericField
          key={index}
          field={field}
          onChange={
            field.type === "checkbox" ? handleCheckboxChange : onFormChange
          }
          selectedCheckboxes={selectedCheckboxes}
        />
      ))}
    </form>
  );
}

export default GenericForm;
