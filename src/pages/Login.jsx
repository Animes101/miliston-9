import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import {sendPasswordResetEmail } from "firebase/auth";

import React, {useContext, useRef } from 'react'
import { auth } from '../firebase/firebase.init'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UsersContext';
// import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";


const Login = () => {

    const emailRef=useRef()

    const provider=new GoogleAuthProvider()
    const providergit = new GithubAuthProvider();

    const {singOut}=useContext(AuthContext);

    const hanldeGoogleLogin=()=>{
    
        signInWithPopup(auth,provider)
        .then((result)=> {

          
        })
        .then((err)=>{
            console.log(err)
        })

        
    }

    const handleSingOut=()=>{
        
        singOut()
        .then(() => {
        // Sign-out successful.
        alert('success ful')
        })
        .catch((error) => {
        // An error happened.
        console.log(error)
        });
    }

    const handleGithub=()=>{

        signInWithPopup(auth, providergit)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    // const credential = GithubAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;

    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });

       
    }

    const hanldeSingoutGitHub=()=>{

        signOut(auth).then(() => {
  // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        console.log(error)
        });
    }

    const handleLogin=(e)=>{

        e.preventDefault();


        const email=e.target.email.value;
        const password=e.target.password.value;


    }
  return (

    <div>
        <form onSubmit={handleLogin} action="">
            <h1>Login Form</h1>
            <input ref={emailRef} className='block border border-green-300' type="email" name="email" id="email" />
            <input className='block w-[600px] border border-red-500' type="password" name="password" id="password" />
            <input className='block w-[600px] border border-red-500' type="submit" value="Login" />
        </form>

       <button className='block' onClick={hanldeGoogleLogin}>Google Login</button> 
       <button className='block' onClick={handleSingOut}>Sing OUt</button>
       <button className='block' onClick={handleGithub}>Login GitHub</button>
       <button className='block' onClick={hanldeSingoutGitHub}>SingOut</button>
       <div>
       </div>
       <p>No Account please SingUp <Link to={'/singup'}>SingUp</Link></p>

    </div>


  )

}

export default  Login;

