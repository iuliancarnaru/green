import React, { useState } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import "./App.scss";

const App = () => {
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
    <div className="login-container">
      <Logo className="app-logo" />
      <h1 className="heading-primary">Example login screen</h1>
      <p className="heading-cta">Getting started with Green</p>
      <div className="input-container">
        <form onSubmit={handleFormSubmit}>
          <label className="input-label" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            id="email"
            onChange={handleInputChange}
            required
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="remember-device"
              checked={formData.rememberDevice}
              onChange={toggleCheckbox}
            />
            <label className="checkbox-label" htmlFor="remember-device">
              Remember this device
            </label>
          </div>
          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
