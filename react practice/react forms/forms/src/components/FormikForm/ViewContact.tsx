import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface contactsState {
  full_name: String;
  phoneNumber: String;
}
interface contactsState {
  full_name: String;
  phoneNumber: String;
}

export default function ViewContact() {
  const contactsInitial: any =
    JSON.parse(localStorage.getItem("contacts") || "") || [];
  const [contacts, setContacts] = useState<contactsState[]>(contactsInitial);

  let { contactID } = useParams<{ contactID: string }>();
  let contactIDInt = parseInt(contactID || "");

  return (
    <div>
      <h4>{contacts[contactIDInt].full_name}</h4>
    </div>
  );
}
