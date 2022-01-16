import * as React from "react";
import { Formik, Form, Field } from "formik";
import NewLine from "./NewLine";
import { useState } from "react";
import * as Yup from "yup";

interface MyFormValues {
  full_name: string;
  phoneNumber: "";
}

interface contactsState {
  full_name: String;
  phoneNumber: String;
}

const ContactAddSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .min(2, "too Short!")
    .max(50, "too long!")
    .required("reqiored"),
});

export const FormikForm = () => {
  const [contacts, setContacts] = useState<contactsState[]>([]);

  const initialValues: MyFormValues = { full_name: "", phoneNumber: "" };

  function validateUsername(value: String) {
    let error;
    if (value === "admin") {
      error = "Nice try!";
    }
    return error;
  }

  return (
    <div>
      <h1>Add Contact</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactAddSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          setContacts([
            ...contacts,
            { full_name: values.full_name, phoneNumber: values.phoneNumber },
          ]);
        }}>
        {({ errors, touched }) => (
          <Form>
            <label htmlFor='full_name'>First Name...</label>
            <Field id='full_name' name='full_name' placeholder='First Name' />
            {errors.full_name && touched.full_name ? (
              <div>{errors.full_name}</div>
            ) : null}
            <NewLine />

            <label htmlFor='phoneNumber'>Phone Number...</label>
            <Field
              id='phoneNumber'
              name='phoneNumber'
              placeholder='Phone Number'
              validate={validateUsername}
            />

            <NewLine />

            <button type='submit'>Add Record</button>
          </Form>
        )}
      </Formik>

      <div className='contacts-table'>
        <table>
          <tr>
            <th>Name | </th>
            <th>Phone No</th>
          </tr>
          {contacts.map((contact, i) => {
            debugger;
            return (
              <tr key={i}>
                <td>{contact.full_name}</td>
                <td>{contact.phoneNumber}</td>
              </tr>
            );
            // console.log(contact);
          })}
        </table>
      </div>
    </div>
  );
};
