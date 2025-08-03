import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/firebase.init'

const Login = () => {

    const provider=new GoogleAuthProvider()

    const hanldeGoogleLogin=()=>{
        signInWithPopup(auth,provider)
        .then((result)=>console.log(result))
        .then((err)=> console.log(err))

        
    }
  return (
    <div>
       <form action="">
        <h1>Login Form</h1>
         <input className='block w-[600px] border border-red-500' type="text" name="name" id="name" />
         <input className='block w-[600px] border border-red-500' type="number" name="number" id="number" />
         <input className='block w-[600px] border border-red-500' type="password" name="password" id="password" />
         <input className='block w-[600px] border border-red-500' type="submit" value="Login" />
       </form>

       <button onClick={hanldeGoogleLogin}>Google Login</button>
    </div>
  )
}

export default Login