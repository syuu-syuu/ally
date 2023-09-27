import React from "react";
import "./form.css";
import { useForm } from "react-hook-form";

function Form() {
  return (
    <form>
      <div>
        <label className="label">Company Name :</label>
        <input className="form" placeholder="ABC Company" />
      </div>
      <div>
        <label className="label">Contact Info :</label>
        <input className="form" placeholder="xx-xxxxxxxxx" />
      </div>
      <div>
        <label className="label">NAICS Code(s) :</label>
        <input className="form" placeholder="xxxxxx" />
      </div>
      <div>
        <label className="label">Annual Revenue :</label>
        <input className="form" placeholder="12344 $" />
      </div>
      <div>
        <label className="label">Number of Employees :</label>
        <input className="form" placeholder="123" />
      </div>
      <div>
        <label className="label">Geographical Coverage Area :</label>
        <input className="form" placeholder="1234 msq" />
      </div>
      <div>
        <label className="label">Diversity Council Affiliation : </label>
        <input className="form" placeholder="NMSDC, WBENC" />
      </div>
    </form>
  );
}

export default Form;
