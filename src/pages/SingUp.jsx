import React, { useState } from 'react'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.init';


const SingUp = () => {
    
    const [error, setError]=useState('');
    const [succes, setSuccess]=useState(false);
    const [showPassword, setShowPassword]=useState(false);


    const hanldeSubmit=(e)=>{
        e.preventDefault()

        const userName=e.target.userName.value;
        const email=e.target.email.value;
        const password=e.target.password.value;



        if(!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/.test(password)){
            alert('fill the input fild')

            return
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed up 

    console.log(userCredential)
    setSuccess(true);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode,errorMessage)

    setError(errorMessage)
    // ..
  });
    }


  return (
    <div>
        <form onSubmit={hanldeSubmit} action="">
            <input className='block border border-red-400' type="text" name="userName" id="userName" />
            <input className='block border border-red-400' type="email" name="email" id="email" />
            <div>
                <input className='block border border-red-400' type={`${showPassword ? 'text': 'password'}`} name="password" id="password" />
                <button onClick={()=>setShowPassword(!showPassword)}>Eie</button>
            </div>
            <input className='block border border-red-400' type="submit" value="SingUp" />
        </form>
        <h1>{succes ? 'login Success Fully': 'please again'}</h1>
        <h1>{error &&   error}</h1>
    </div>
  )
}

export default SingUp