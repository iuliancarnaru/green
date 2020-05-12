import React, { useState } from "react";
import "./custom-form.styles.scss";
import CustomButton from "../custom-button";
import FormInput from "../form-input";

const CustomForm = () => {
  const initialFormState = {
    email: "",
    rememberDevice: false,
  };

  const [formData, setFromData] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFromData({ ...formData, [name]: value });
  };

  const toggleCheckbox = () => {
    setFromData({ ...formData, rememberDevice: !formData.rememberDevice });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(`Form submited`, formData);
    setFromData(initialFormState);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormInput
        label="Email address"
        id="email"
        type="email"
        name="email"
        value={formData.email}
        handleChange={handleInputChange}
        required
      />
      <div className="checkbox-container">
        <FormInput
          label="Remember this device"
          id="remember-device"
          type="checkbox"
          checked={formData.rememberDevice}
          onChange={toggleCheckbox}
        />
      </div>
      <CustomButton type="submit">Sign In</CustomButton>
    </form>
  );
};

export default CustomForm;
