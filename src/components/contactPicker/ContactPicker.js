import React from 'react'

export const ContactPicker = (props) => {
  const names = props.contacts.map((contact) => {
    return (
      <option value={contact.name} key={contact}>
        {contact}
      </option>
    )
  })

  return (
    <select id="contactList" onChange={props.onChange} required>
      <option value={props.value} key="default">
        {props.value}
      </option>
      {names}
    </select>
  )
}
