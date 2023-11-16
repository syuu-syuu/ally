import React from "react";

function GenericField({ field, onChange, selectedCheckboxes }) {
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
      return (
        <div>
          <label className="label">{field.label}:</label>
          {field.options.map((option, idx) => (
            <span key={idx}>
              <input
                type="checkbox"
                name={field.name}
                value={option.value}
                checked={selectedCheckboxes[field.name]?.includes(option.value)}
                onChange={onChange}
              />
              {option.label}
            </span>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default GenericField;
