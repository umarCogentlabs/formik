import React from "react";

interface contactsState {
  full_name: String;
  phoneNumber: String;
}

export default function ViewContact({ phoneNumber, full_name }: contactsState) {
  return (
    <div>
      <h1>Contact Name {full_name}</h1>
      <h1>Phone Number {phoneNumber}</h1>
    </div>
  );
}
