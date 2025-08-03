import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex justify-center items-center gap-5'>
        <NavLink className={({isActive })=> isActive ? 'text-green-700' : 'text-black'} to={'/'}>Home</NavLink>
        <NavLink className={({isActive })=> isActive ? 'text-green-700' : 'text-black'} to={'/login'}>Login</NavLink>
        <NavLink className={({isActive })=> isActive ? 'text-green-700' : 'text-black'} to={'/singup'}>SingUp</NavLink>
        
    </nav>
  )
}

export default NavBar