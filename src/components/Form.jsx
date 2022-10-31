import React, {useState} from 'react'
import Display from './Display'

const Form = (props) => {

    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPw, setConfirmPw] = useState("")

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
                First Name: <input onChange={(e) => setFirstName(e.target.value)} value={firstName}/> <br />
                Last Name: <input onChange={(e) => setLastName(e.target.value)} value={lastName}/> <br />
                Email: <input onChange={(e) => setEmail(e.target.value)} value={email}/> <br />
                Password: <input onChange={(e) => setPassword(e.target.value)} value={password}/> <br />
                Confirm Password: <input onChange={(e) => setConfirmPw(e.target.value)} value={confirmPw}/> <br />
                {/* <button>submit</button> */}
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