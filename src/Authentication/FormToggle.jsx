import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

function FormToggle() {
    const [isLoginForm , setIsLoginForm] = useState(true);

    const toggleForm = () =>{
        setIsLoginForm(!isLoginForm)
    }
  return (
    <div>
        {
isLoginForm ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />
        }   
         </div>
  )
}

export default FormToggle