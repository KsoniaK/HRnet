import React from "react";
import "../assets/style/dropDown.css";

function Dropdown({ label, name, value, options, onChange, required = false }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <select name={name} value={value} onChange={onChange} required={required}>
        <option value="">Select {label}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;