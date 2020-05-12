import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ id, handleChange, type, label, ...otherProsp }) => (
  <div style={{ position: "relative" }}>
    <label className={`input-label-${type}`} htmlFor={id}>
      {label}
    </label>
    <input
      type={type}
      className="form-input"
      onChange={handleChange}
      id={id}
      {...otherProsp}
    />
  </div>
);

export default FormInput;
