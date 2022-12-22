import React, { useState } from 'react'

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm'
import { TileList } from '../../components/tileList/TileList'

export const AppointmentsPage = ({ appointment, addAppointment, contacts }) => {
  /*
  Define state variables for 
  appointment info
  */
  console.log(contacts, contacts.length)
  const [title, setTitle] = useState('')
  const [contact, setContact] = useState(contacts.length > 0 ? contacts[0].name : 'No contacts selected')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  console.log(title, contact, date, time)

  const handleSubmit = (e) => {
    e.preventDefault()
    /*
    Add contact info and clear data  
    */
    console.log(title, contact, date, time)
    addAppointment(title, contact, date, time)
    setTitle('')
    setContact(contacts.length > 0 ? contacts[0].name : 'No contacts selected')
    setDate('')
    setTime('')
  }

  return (
    <div>
      <section>
        <h2>
          Add Appointment
          <AppointmentForm
            contacts={contacts}
            title={title}
            setTitle={setTitle}
            contact={contact}
            setContact={setContact}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            handleSubmit={handleSubmit}
          />
        </h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointment} />
      </section>
    </div>
  )
}
