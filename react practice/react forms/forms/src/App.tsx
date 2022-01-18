import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Formik_app } from "./components/Signup/Signup";
import { FormikForm } from "./components/FormikForm/FormikForm";
import { ValidationSchemaExample } from "./components/validation_temp/Validation";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <nav>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<FormikForm />} />

          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}
