import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, handleAddContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [newName, setName] = useState("");
  const [newPhone, setPhone] = useState("");
  const [newEmail, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if (!contacts.some((contact) => contact.name === newName)) {
      handleAddContact(newName, newPhone, newEmail);
    }
    setName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={newName}
          setName={setName}
          phone={newPhone}
          setPhone={setPhone}
          email={newEmail}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
