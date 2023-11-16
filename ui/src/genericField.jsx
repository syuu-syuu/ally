import React from "react";
import "./form.css";

function GenericField({ field, onChange, selectedCheckboxes }) {
  // Function to determine if a checkbox is checked
  const isCheckboxChecked = (optionValue) => {
    const fieldValues = selectedCheckboxes[field.name];
    if (Array.isArray(fieldValues)) {
      // For multiple-choice checkboxes
      return fieldValues.includes(optionValue);
    }
    // For binary (Yes/No) checkboxes
    return fieldValues === optionValue;
  };

  switch (field.type) {
    case "input":
      return (
        <div>
          <label className="label">{field.label}:</label>
          <input
            className="form"
            type="text"
            placeholder={field.placeholder}
            name={field.name}
            onChange={onChange}
          />
        </div>
      );

    case "textarea":
      return (
        <div>
          <label className="label">{field.label}:</label>
          <textarea
            className="form"
            name={field.name}
            placeholder={field.placeholder}
            onChange={onChange}
            rows={4}
          />
        </div>
      );
    case "checkbox":
      const isBinary = field.checkboxType === "binary";

      return (
        <div className="table-row">
          <label>{field.label}</label>
          <div className="option-box">
            {field.options.map((option, idx) => (
              <div className="checkbox" key={idx}>
                <input
                  type="checkbox"
                  name={field.name}
                  value={option.value}
                  checked={
                    isBinary
                      ? selectedCheckboxes[field.name] === option.value
                      : isCheckboxChecked(option.value)
                  }
                  onChange={onChange}
                />
                <span className="option-msg">{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default GenericField;
