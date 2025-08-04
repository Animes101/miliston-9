import { RouterProvider, createBrowserRouter } from 'react-router-dom'



import './App.css'
import Root from './route/Root'
import Home from './pages/Home'
import Login from './pages/Login'
import SingUp from './pages/SingUp'
import UsersContext from './context/UsersContext'

function App() {
 
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      {path:'/login', element:<Login />},
      {path:'/singup', element:<SingUp />}
    ],
  },
])

  return (
    <UsersContext>
      <RouterProvider  router={router} /> 
    </UsersContext>
   
  )
}

export default App
