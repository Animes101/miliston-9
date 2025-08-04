import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase.init";


export const AuthContext=createContext(null)


const UsersContext = ({children}) => {

    const [users, setUsers]=useState(null);

    const createUsers=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unscribe =  onAuthStateChanged(auth,(current)=>{
                setUsers(current)
                console.log('objerving')
            
        })

        return ()=> unscribe()

    },[])
  return (
    <AuthContext.Provider value={{users,setUsers ,createUsers,singOut}}>
        {children}
    </AuthContext.Provider>
    
  )
}

export default UsersContext;