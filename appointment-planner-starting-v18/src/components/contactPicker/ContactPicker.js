import React from "react";

export const ContactPicker = ({ contacts, value, name, onChange }) => {
  return (
    <>
      <select name={name} value={value} onChange={onChange}>
        {/* <option key="0" value=""></option> */}
        {contacts.map((contact, index) => {
          return (
            <option key={index} value={contact.name}>
              {contact.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
