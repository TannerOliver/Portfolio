let Contact = (props) => {

  return (
    <>
      <label for='name'>Name:</label>
      <input type='text' id='name' name= 'name' value='John Doe'></input>
      <label for='email'>E-mail:</label>
      <input type='email' id='email' name='email' value='example@gmail.com'></input>
      <label for='message'>Message:</label>
      <input type='text' id='message' name='message' value='Type comments and or questions here!'></input>
    </>
  )
};

export default Contact;