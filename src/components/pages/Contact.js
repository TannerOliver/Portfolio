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
    <div id='form'>
      <label for='name'>Name:</label> <br/>
      <input type='text' id='name' name= 'name' value={input.name} onChange={handleInput}></input><br/>
      <label for='email'>E-mail:</label> <br/>
      <input type='email' id='email' name='email' value={input.email} pattern=".+@globex\.com" onChange={handleInput}></input><br/>
      <label for='message'>Message:</label> <br/>
      <input type='text' id='message' name='message' value={input.message} onChange={handleInput}></input><br/>
      <button onClick={handleSubmit}>submit</button><br/>
    </div>
  )
};

export default Contact;