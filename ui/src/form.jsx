import React from "react";
import GenericField from "./genericField";
import "./form.css";

const steps = [
  // First Step
  {
    fields: [
      {
        type: "input",
        name: "companyName",
        label: "Company Name",
        placeholder: "ABC Company",
      },

      {
        type: "input",
        name: "NAICS Code(s)",
        label: "NAICS Code(s)",
        placeholder: "221114",
      },
      {
        type: "input",
        name: "Annual Revenue",
        label: "Annual Revenue",
        placeholder: "10000",
      },
      {
        type: "input",
        name: "Number of Employees",
        label: "Number of Employees",
        placeholder: "100",
      },
      {
        type: "input",
        name: "Geographical Coverage Area",
        label: "Geographical Coverage Area",
        placeholder: "Nationwide",
      },
      {
        type: "input",
        name: "Diversity Council Affiliation",
        label: "Diversity Council Affiliation",
        placeholder: "NMSDC, WBENC",
      },
      {
        type: "input",
        name: "contactName",
        label: "Contact Name",
        placeholder: "John Doe",
      },
      {
        type: "input",
        name: "email",
        label: "Contact Email",
        placeholder: "johndoe@ally.com",
      },
      {
        type: "input",
        name: "phoneNumber",
        label: "Phone Number",
        placeholder: "(123) 456-7890",
      },
    ],
  },

  // Second Step
  {
    fields: [
      {
        type: "textarea",
        name: "Please provide an overview of your company.",
        label: "Please provide an overview of your company.",
        placeholder: "Type here",
      },
      {
        type: "textarea",
        name: "What is your business's specialty, or niche?",
        label: "What is your business's specialty, or niche?",
        placeholder: "Type here",
      },
      {
        type: "textarea",
        name: "Please elaborate on potential future engagement.",
        label: "Please elaborate on potential future engagement.",
        placeholder: "Type here",
      },
    ],
  },
  // Third Step
  {
    fields: [
      {
        type: "checkbox",
        name: "Does your business have any existing relationship with Ally?",
        checkboxType: "binary",
        label: "Does your business have any existing relationship with Ally?",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" },
        ],
      },
      {
        type: "checkbox",
        name: "Does your company have a Supplier Diversity program?",
        checkboxType: "binary",
        label: "Does your company have a Supplier Diversity program?",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" },
        ],
      },
      {
        type: "checkbox",
        name: "Your business is",
        checkboxType: "multiple",
        label: "Is your business",
        options: [
          {
            value: "Minority-owned",
            label: "Minority-owned",
          },
          { value: "Women-owned", label: "Women-owned" },
          { value: "Veteran-owned", label: "Veteran-owned" },
          { value: "LGBTQ-owned", label: "LGBTQ-owned" },
          { value: "Disability-owned", label: "Disability-owned" },
          { value: "Small business", label: "Small business" },
        ],
      },
      {
        type: "checkbox",
        name: "Does your company offer contingent labor services?",
        checkboxType: "binary",
        label:
          "Does your company offer contingent labor services? (If yes, please complete additional survey opened in browser)",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" },
        ],
      },
    ],
  },
];

function GenericForm({
  stepIndex,
  onFormChange,
  selectedCheckboxes,
  setSelectedCheckboxes,
}) {
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const field = steps[stepIndex].fields.find((f) => f.name === name);
    const isBinary = field.checkboxType === "binary";

    if (isBinary) {
      setSelectedCheckboxes((prev) => ({
        ...prev,
        [name]: checked ? value : "",
      }));
    } else {
      setSelectedCheckboxes((prev) => {
        const currentValues = new Set(prev[name] || []);
        if (checked) {
          currentValues.add(value);
        } else {
          currentValues.delete(value);
        }
        return { ...prev, [name]: Array.from(currentValues) };
      });
    }
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
