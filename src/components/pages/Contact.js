import React, { useState } from 'react';

let Contact = (props) => {
//  Use a regex to confirm if email is a valid email
  const defaultInput = {name: '', email: '', message: ''}

  const [input,setInput] = useState(defaultInput)

  const handleInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(defaultInput);
  }

  return (
    <>
      <label for='name'>Name:</label>
      <input type='text' id='name' name= 'name' value={input.name} onChange={handleInput}></input>
      <label for='email'>E-mail:</label> 
      <input type='email' id='email' name='email' value={input.email} pattern=".+@globex\.com" onChange={handleInput}></input>
      <label for='message'>Message:</label>
      <input type='text' id='message' name='message' value={input.message} onChange={handleInput}></input>
      <button onClick={handleSubmit}>submit</button>
    </>
  )
};

export default Contact;