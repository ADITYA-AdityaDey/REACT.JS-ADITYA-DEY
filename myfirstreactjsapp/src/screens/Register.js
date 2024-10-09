import React from 'react'

function Register() {
  function handleRegister(event) {
    event.preventDefault();
    console.log("Hello React");
  }

  // Conditional Rendering
  let age = 21;
  let emailId = "ABC@email.com";

  return (
    <form>
      {age > 18 && emailId == "ABC@email.com" ? (
      <div>
        <input type='email' placeholder='Enter Email'></input>
        <button onClick={handleRegister}>Submit</button>
      </div>
      ) : <h1>You are not able to use this website. Please meet all the criteria....</h1>}
    </form>
  );
}

export default Register;