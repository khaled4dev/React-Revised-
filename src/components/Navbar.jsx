import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-black text-white p-5 flex justify-between items-center"> 
            <h1 className="text-2xl font-bold">Notes App</h1>
            <div className="flex gap-5">
                <NavLink to="/home" className="text-lg font-medium active:text-red-500">Home</NavLink>
                <NavLink to="/notes" className="text-lg font-medium active:text-red-500">Notes</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar