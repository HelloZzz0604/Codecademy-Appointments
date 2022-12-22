import React, { useState } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'

import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage'
import { ContactsPage } from './containers/contactsPage/ContactsPage'

function App() {
  const [appointment, setAppointments] = useState([])
  const [contacts, setContacts] = useState([])

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  }

  const addContacts = (name, phone, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ])
  }

  const addAppointments = (title, contact, date, time) => {
    setAppointments([
      ...appointment,
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
      },
    ])
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage addContact={addContacts} contacts={contacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointment={appointment} addAppointment={addAppointments} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  )
}

export default App
