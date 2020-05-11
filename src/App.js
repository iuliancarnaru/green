import React, { useState } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import "./App.css";

const App = () => {
  const initialFormState = { email: "" };
  const [formData, setFromData] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFromData({ ...formData, [name]: value });
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
          />
          <div className="checkbox-container">
            <input type="checkbox" id="remember-device" />
            <label className="checkbox-label" htmlFor="remember-device">
              Remember this device
            </label>
          </div>
          <button className="submit-button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
