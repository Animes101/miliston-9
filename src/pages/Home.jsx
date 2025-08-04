import { useContext } from "react"
import { AuthContext } from "../context/UsersContext"

const Home = () => {


  const {users}=useContext(AuthContext);

  console.log(users)

 
  return (
    <div>
      <h1>{users?.email}</h1>
    </div>
  )
}

export default Home