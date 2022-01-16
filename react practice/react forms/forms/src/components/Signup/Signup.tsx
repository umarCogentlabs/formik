// import React from "react";
// import { Formik, Form } from "formik";

import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

interface MyFormValues {
  name: string;
}

export const Formik_app = () => {
  function validateUsername(value: String) {
    let error;
    if (value === "admin") {
      error = "Nice try!";
    }
    return error;
  }

  const initialValues: MyFormValues = { name: "" };
  return (
    <div>
      <h1>Formik</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}>
        <Form>
          <label htmlFor='name'>First Name</label>
          <input id='name' name='name' placeholder='Enter Your Name' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
