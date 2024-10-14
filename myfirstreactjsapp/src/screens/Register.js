// import React, { useEffect, useState } from 'react'
// import "./Register.css";

// function Register() {

//   // Hooks
//   // useState()

//   const [email, setEmail] = useState(); // Hook - Manage State
//   const [passw, setPassword] = useState();
//   const [age, setAge] = useState(20);

//   function handleRegister(event) {
//     event.preventDefault();
//     console.log("Hello React");
//   }

//   function increaseAge(event) {
//     event.preventDefault();
//     setAge(age + 1);
//   }

//   // console.log(email);
//   // console.log(passw);

//   // useEffect - It runs on the screen render

//   useEffect(() => { console.log("age: ", age); }, [age]); // Dependency Array: We provide this with state variables or any variables that are changing in nature, hit a re-render

//   return (
//     <form>
//       {age > 18 ? (
//         <div>
//           <h1>{age}</h1>
//           <input className='form-input' type='email' placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)}></input>
//           <input className='form-input' type='password' placeholder='Enter Password' value={passw} onChange={p => setPassword(p.target.value)}></input>
//           <button onClick={handleRegister}>Submit</button>
//         </div>
//       ) : (<h1>You are not able to access this</h1>)
//       }
//       <button onClick={increaseAge}>Increase</button>

//     </form>
//   );
// }

// export default Register;




// useMemo() hook
import React, { useMemo, useState } from 'react'

const expensiveCalculation = (num) => {
  console.log("Calculating....")
  for(let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num; // 2-4 second
};

function Register() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]); // Memoization: It's storing this inside a cache


// TODOS - Array - map - access every single element and then use it to display a component or a screen

const increment = () => {
  setCount((c) => c + 1);
};
const addTodo = () => {
  setTodos((t) => [...t, "New Todo"]);
};


  return (
    <div>
      <div>
      <h2>TO DOs</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add TODO</button>
      <hr />
      </div>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

export default Register