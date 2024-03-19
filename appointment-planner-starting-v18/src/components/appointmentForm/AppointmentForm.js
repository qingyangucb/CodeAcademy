import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={setName} placeholder="Name" />
        <ContactPicker
          name="contact"
          value={contact}
          contacts={contacts}
          onChange={setContact}
        />
        <input
          type="date"
          value={date}
          onChange={setDate}
          min={getTodayString()}
        />
        <input type="time" value={time} onChange={setTime} placeholder="Time" />
        <button type="submit">Add Appointment</button>
      </form>
    </>
  );
};
