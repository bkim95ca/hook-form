import React, {useState} from 'react'
import Display from './Display'

const Form = (props) => {

    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPw, setConfirmPw] = useState("")
    const [confirmPwError, setConfirmPwError] = useState("")


    const lastNameValidation = (e) => {
      setLastName(e.target.value);
      if(e.target.value.length < 2 && e.target.value.length > 0) {
          setLastNameError("Last name must be at least 2 characters!");
      } else {
        setLastNameError("");
      }
  }

  const firstNameValidation = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 2 && e.target.value.length > 0) {
        setFirstNameError("First name must be at least 2 characters!");
    }
    else {
        setFirstNameError("");
    }
}

const emailValidation = (e) => {
  setEmail(e.target.value);
  if(e.target.value.length < 5 && e.target.value.length > 0) {
      setEmailError("Email must be at least 5 characters!");
  }
  else {
      setEmailError("");
  }
}

const passwordValidation = (e) => {
  setPassword(e.target.value);
  if(e.target.value.length < 8 && e.target.value.length > 0) {
      setPasswordError("Password must be at least 8 characters!");
  }
  else {
      setPasswordError("");
  }
}

const confirmPwValidation = (e) => {
  setConfirmPw(e.target.value);
  if (e.target.value != password && e.target.value.length > 0) {
    setConfirmPwError("Passwords must match.");
  } else {
    setConfirmPwError("");
  }
}

    const createUser = (e) => {
        e.preventDefault()
        props.addToPeopleState(firstName)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPw("")
    }

  return (
    <fieldset>
        <legend>Form</legend>
            <form onSubmit={createUser}>
                <label>First Name: </label>
                <input onChange={ firstNameValidation } value={firstName}/>
                {
                  firstNameError ?
                  <p style={{color:'red'}}>{ firstNameError }</p> :
                  ''
                }<br />
                Last Name: <input onChange={lastNameValidation} value={lastName}/> 
                {
                  lastNameError ?
                  <p style={{color:'red'}}>{ lastNameError }</p> :
                  ''
                }<br />
                Email: <input onChange={emailValidation} value={email}/>
                {
                  emailError ?
                  <p style={{color:'red'}}>{ emailError }</p> :
                  ''
                } <br />
                Password: <input onChange={passwordValidation} value={password}/>
                {
                  passwordError ?
                  <p style={{color:'red'}}>{ passwordError }</p> :
                  ''
                } <br />
                Confirm Password: <input onChange={confirmPwValidation} value={confirmPw}/>
                {
                  confirmPwError ?
                  <p style={{color:'red'}}>{ confirmPwError }</p> :
                  ''
                } <br />
            </form>
            <hr />
            <Display 
                firstName = {firstName}
                lastName = {lastName}
                email = {email}
                password = {password}
                confirmPw = {confirmPw}
                />
    </fieldset>
  )
}

export default Form