import * as React from "react";
import { Formik, Form, Field } from "formik";
import NewLine from "./NewLine";
import { useState, useEffect } from "react";
import * as Yup from "yup";

interface MyFormValues {
  full_name: String;
  phoneNumber: String;
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

  phoneNumber: Yup.string()
    .min(2, "too Short!")
    .max(50, "too long!")
    .required("Required"),
});

export const FormikForm = () => {
  const [contacts, setContacts] = useState<contactsState[]>([]);
  let initialValues: MyFormValues = { full_name: "", phoneNumber: "" };
  const [initialValuesState, setInitialValues] = useState(initialValues);

  const [searchMode, setSearchMode] = useState(false);

  const [editButton, setEditButton] = useState({
    buttonName: "Add",
    index: 0,
  });

  const handleEdit = (itemID: any) => {
    const name_edit = contacts[itemID].full_name;
    const phone_edit = contacts[itemID].phoneNumber;

    setInitialValues({
      full_name: name_edit,
      phoneNumber: phone_edit,
    });

    setEditButton({
      buttonName: "Edit",
      index: itemID,
    });
  };

  const handleSubmit = (values: MyFormValues, { resetForm }: any) => {
    resetForm({ values: initialValues });
    debugger;
    editButton.buttonName === "Add" &&
      setContacts([
        ...contacts,
        { full_name: values.full_name, phoneNumber: values.phoneNumber },
      ]);

    if (editButton.buttonName === "Edit") {
      let allContacts = [...contacts];
      const index = editButton.index;
      allContacts[index] = {
        full_name: values.full_name,
        phoneNumber: values.phoneNumber,
      };
      setContacts([...allContacts]);
      //reset button name
      setEditButton({
        buttonName: "Add",
        index: 0,
      });
    }
  };

  //search area...........................................................................
  // interface searchContact {
  //   searchValue: String;
  // }
  // let initialValueSearch: searchContact = { searchValue: "" };

  const [searchArray, setSearchArray] = useState<MyFormValues[]>([]);
  const [searchContactsArray, setSearchContactsArray] = useState<
    MyFormValues[]
  >([]);

  // const handleSearchSubmit = (values: searchContact) => {
  //   setSearchContactsArray([]);

  //   if (values.searchValue != "") {
  //     setSearchMode(true);
  //   } else {
  //     setSearchMode(false);
  //   }
  //   const searchString: any = values.searchValue;
  //   contacts.map((contact) => {
  //     if (contact.full_name.toLowerCase().includes(searchString)) {
  //       searchContactsArray.push(contact);
  //     }
  //   });
  //   setSearchArray([...searchContactsArray]);
  // };

  //simple form..................................................................................................................
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event: any) => {
    setInputValue(event.target.value);
    debugger;

    if (inputValue !== "") {
      setSearchMode(true);
    } else {
      setSearchMode(false);
    }

    setSearchContactsArray([]);
    // const searchString: any = inputValue;
    contacts.map((contact) => {
      if (contact.full_name.toLowerCase().includes(inputValue)) {
        searchContactsArray.push(contact);
      }
    });
    setSearchArray([...searchContactsArray]);
  };

  // useEffect(() => {}, [searchContactsArray,]);
  return (
    <div>
      <h1>Add Contact</h1>

      {/* add contacts form */}
      <Formik
        initialValues={initialValuesState}
        enableReinitialize={true}
        validationSchema={ContactAddSchema}
        onSubmit={handleSubmit}>
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
              type='tel'
              pattern='[0-9]{4}-[0-9]{6}'
              placeholder='Phone Number'
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <div>{errors.phoneNumber}</div>
            ) : null}

            <NewLine />

            <button type='submit'>{editButton.buttonName} Record</button>

            <NewLine />
          </Form>
        )}
      </Formik>

      <NewLine />
      <NewLine />

      {/* search */}
      {/* <Formik
        initialValues={initialValueSearch}
        // enableReinitialize={true}
        // validationSchema={ContactAddSchema}
        onSubmit={handleSearchSubmit}>
        {({ errors, touched }) => (
          <Form>
            <label htmlFor='searchValue'>Search</label>
            <Field
              // onChange={handleSearchSubmit}
              id='searchValue'
              name='searchValue'
              on
              placeholder=''
            />
            <button type='submit'>Search</button>
          </Form>
        )}
      </Formik> */}

      <input
        type='text'
        name='name'
        onChange={onChangeHandler}
        value={inputValue}
      />
      <NewLine />
      <NewLine />

      <div
        className='contacts-table'
        style={{ placeContent: "center", display: "flex" }}>
        <table>
          <tr>
            <th>Name | </th>
            <th>Phone No |</th>
            <th>Edit</th>
          </tr>

          {!searchMode &&
            contacts.map((contact, i) => {
              return (
                <tr key={i}>
                  <td>{contact.full_name}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>
                    <button id={`${i}`} onClick={() => handleEdit(i)}>
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}

          {searchMode &&
            searchArray.map((contact, i) => {
              debugger;
              return (
                <tr key={i}>
                  <td>{contact.full_name}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>
                    <button id={`${i}`} onClick={() => handleEdit(i)}>
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
};
