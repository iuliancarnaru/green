import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import "./App.scss";
import CustomForm from "./components/custom-form/custom-form.component";

const App = () => {
  return (
    <div className="login-container">
      <Logo className="app-logo" />
      <h1 className="heading-primary">Example login screen</h1>
      <p className="heading-cta">Getting started with Green</p>
      <div className="input-container">
        <CustomForm />
      </div>
    </div>
  );
};

export default App;
