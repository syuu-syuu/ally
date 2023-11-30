import React from "react";
import "./form.css";

const mock = {
  "Company Name": "qqq",
  "Contact Info": "qqq",
  "NAICS Code(s)": "qqq",
  "Annual Revenue": "qqq",
  "Number of Employees": "qqq",
  "Geographical Coverage Area": "qqq",
  "Diversity Council Affiliation": "qqq",
  "Please provide an overview of your company.": "qqq",
  "What is your business's specialty, or niche?": "qqq",
  "Please elaborate on potential future engagement.": "qqq",
  "Does your business have any existing relationship with Ally?": "Yes",
  "Does your company have a Supplier Diversity program?": "No",
  "Is your business": ["Women-owned", "Small business"],
  "Does your company offer contingent labor services?": "No",
};
// const a = [{ a: 1 }, { a: 2 }]; //[ {a:1,b:2},{a:2,b:2}]
// const new_element = a.map((item, index) => {
//   return { ...item, b: 2 };
// });

const part1 = [
  "Company Name",
  "Contact Info",
  "NAICS Code(s)",
  "Annual Revenue",
  "Number of Employees",
  "Geographical Coverage Area",
  "Diversity Council Affiliation",
];

const part2 = [
  "Please provide an overview of your company.",
  "What is your business's specialty, or niche?",
  "Please elaborate on potential future engagement.",
];

// const part3 = [
//   "Does your business have any existing relationship with Ally?",
//   "Does your company have a Supplier Diversity program?",
//   "Is your business",
//   "Does your company offer contingent labor services?",
// ];

// const custom_style = {
//   "Company Name": {},
// };

function getClassNameForKey(key) {
  if (part1.includes(key)) {
    return "summary-part1";
  } else if (part2.includes(key)) {
    return "summary-part2";
  } else {
    return "summary-part3";
  }
}

function Summary({ formData, isDisclaimerChecked, handleDisclaimerChange }) {
  return (
    <div className="summary">
      {Object.entries(formData).map(([key, value], index) => (
        <div className={getClassNameForKey(key)} key={index}>
          <label>{key}</label>
          <div
            className="content"
            //  style={custom_style[key]}
          >
            {Array.isArray(value) ? value.join(", ") : value}
          </div>
        </div>
      ))}

      <div className="disclaimer">
        <input
          type="checkbox"
          name="disclaimer"
          checked={isDisclaimerChecked}
          onChange={handleDisclaimerChange}
        />
        <span className="option-msg">
          This document neither constitutes an agreement to conduct transactions
          by electronic means nor creates any legally binding contract or
          enforceable obligation in the absence of a fully signed written
          contract and are not binding until Ally Financial Inc. provides such
          approval in a written signed by both parties.
        </span>
      </div>
    </div>
  );
}

export default Summary;
