import React from 'react'

/*
Code Optimization Tips:

Tip1>> Props is a Object, I can destructure it.
*/


function Title({ name, email, id }) {
  return (
    <div>
    <h1 style={{fontSize: 100, color: 'red'}}>{name}</h1>
    <h1 style={{fontSize: 100, color: 'red'}}>{email}</h1>
    <h1 style={{fontSize: 100, color: 'red'}}>{id}</h1>
    </div>
  );
}

export default Title;