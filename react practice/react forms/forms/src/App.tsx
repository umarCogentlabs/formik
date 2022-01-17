import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Formik_app } from "./components/Signup/Signup";
import { FormikForm } from "./components/FormikForm/FormikForm";
import { ValidationSchemaExample } from "./components/validation_temp/Validation";

function App() {
  return (
    <div className='App'>
      {/* <Formik_app /> */}
      <FormikForm />
      {/* <ValidationSchemaExample /> */}
    </div>
  );
}

export default App;
