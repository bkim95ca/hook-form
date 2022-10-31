import React, {useState} from 'react'

const Display = (props) => {
  return (
    <fieldset>
        <legend>Display.jsx</legend>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
        <p>Confirm PW: {props.confirmPw}</p>

    </fieldset>
  )
}

export default Display