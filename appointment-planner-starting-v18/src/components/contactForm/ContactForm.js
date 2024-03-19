import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="tel"
          // pattern="\d{3}-\d{3}-\d{4}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone: XXX-XXX-XXXX"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Add Contact</button>
      </form>
    </>
  );
};
