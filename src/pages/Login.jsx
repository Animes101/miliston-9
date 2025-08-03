import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase/firebase.init'
// import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";


const Login = () => {

    const [users, setUsers]=useState();


    const provider=new GoogleAuthProvider()
    const providergit = new GithubAuthProvider();

    const hanldeGoogleLogin=()=>{
        signInWithPopup(auth,provider)
        .then((result)=> {

           setUsers(result.user);
        })
        .then((err)=>{
            console.log(err)
        })

        
    }

    const handleSingOut=()=>{
        
        signOut(auth)
        .then(() => {
        // Sign-out successful.
        setUsers(null);
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
  return (

    <div>
        <form action="">
            <h1>Login Form</h1>
            <input className='block w-[600px] border border-red-500' type="text" name="name" id="name" />
            <input className='block w-[600px] border border-red-500' type="number" name="number" id="number" />
            <input className='block w-[600px] border border-red-500' type="password" name="password" id="password" />
            <input className='block w-[600px] border border-red-500' type="submit" value="Login" />
        </form>

       <button className='block' onClick={hanldeGoogleLogin}>Google Login</button> 
       <button className='block' onClick={handleSingOut}>Sing OUt</button>
       <button className='block' onClick={handleGithub}>Login GitHub</button>
       <button className='block' onClick={hanldeSingoutGitHub}>SingOut</button>
       <div>

        <h1>{users?.displayName}</h1>
        <h1>{users?.displayName}</h1>
        <h1>{users?.email}</h1>
       </div>

    </div>


  )

}

export default  Login;

