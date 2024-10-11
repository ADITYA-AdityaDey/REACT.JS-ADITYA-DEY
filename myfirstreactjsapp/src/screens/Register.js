import React from 'react'

function Register() {
  function handleRegister(event) {
    event.preventDefault();
    console.log("Hello React");
  }



  return (
    <form>
      <div>
        <input type='email' placeholder='Enter Email'></input>
        <button onClick={handleRegister}>Submit</button>
      </div>
    </form>
  );
}

export default Register;