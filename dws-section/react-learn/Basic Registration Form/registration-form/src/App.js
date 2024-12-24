import React, { useState } from 'react'

const App = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)
  const handelFirstName = (event) =>{
    setValues({...values, firstName:event.target.value})
  }
  const handelLastName = (event) =>{
    setValues({...values, lastName:event.target.value})
  }
  const handelEmail = (event) =>{
    setValues({...values, email:event.target.value})
  }
  const submitHandler =(event) =>{
    event.preventDefault()
    if (values.firstName && values.lastName && values.email) {
      setValid(true)
    }
    setSubmitted(true)
    // setValues({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    // })
    
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        {submitted && valid?<div style={{color: "blue"}}>You have submitted</div>: false}
        <input type='text' placeholder='Firstname' value={values.firstName} onChange={handelFirstName}></input> <br></br>
        {submitted && !values.firstName ? <span>firstName is invalid</span> : null }<br></br>
        <input type='text' placeholder='Lastname' value={values.lastName} onChange={handelLastName}></input><br></br>
        {submitted && !values.lastName ? <span>lastName is invalid</span> : null }<br></br>
        <input type='email' placeholder='Email' value={values.email} onChange={handelEmail}></input><br></br>
        {submitted && !values.email ? <span>email is invalid</span> : null }<br></br>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App