import React from "react";
import "./form.css";

function Form({ onFormChange }) {
  // const [formData, setFormData] = React.useState({
  //   company: "",
  //   contact: "",
  //   NAICS: "",
  //   revenue: "",
  //   employees: "",
  //   area: "",
  //   diversity: "",
  // });

  // const handleFill = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // React.useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <form>
      <div>
        <label className="label">Company Name :</label>
        <input
          className="form"
          placeholder="ABC Company"
          name="Company Name"
          onChange={onFormChange}
        />
      </div>
      <div>
        <label className="label">Contact Info : </label>
        <input
          className="form"
          placeholder="xx-xxxxxxxxx"
          name="Contact Info"
          onChange={onFormChange}
        />
      </div>
      <div>
        <label className="label">NAICS Code(s) :</label>
        <input
          className="form"
          placeholder="xxxxxx"
          name="NAICS Code(s)"
          onChange={onFormChange}
        />
      </div>
      <div>
        <label className="label">Annual Revenue :</label>
        <input
          className="form"
          placeholder="12344 $"
          name="Annual Revenue"
          onChange={onFormChange}
        />
      </div>
      <div>
        <label className="label">Number of Employees :</label>
        <input
          className="form"
          placeholder="123"
          name="Number of Employees"
          onChange={onFormChange}
        />
      </div>
      <div>
        <label className="label">Geographical Coverage Area :</label>
        <input
          className="form"
          placeholder="1234 msq"
          name="Geographical Coverage Area"
          onChange={onFormChange}
        />
      </div>
      <div>
        <label className="label">Diversity Council Affiliation : </label>
        <input
          className="form"
          placeholder="NMSDC, WBENC"
          name="Diversity Council Affiliation"
          onChange={onFormChange}
        />
      </div>
    </form>
  );
}

export default Form;
