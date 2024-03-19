import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  contacts,
  handleAddAppointment,
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [newName, setName] = useState("");
  const [newContact, setContact] = useState("");
  const [newDate, setDate] = useState("");
  const [newTime, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    handleAddAppointment(newName, newContact, newDate, newTime);
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          name={newName}
          setName={(e) => setName(e.target.value)}
          contact={newContact}
          setContact={(e) => setContact(e.target.value)}
          date={newDate}
          setDate={(e) => setDate(e.target.value)}
          time={newTime}
          setTime={(e) => setTime(e.target.value)}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contacts={appointments} />
      </section>
    </div>
  );
};
