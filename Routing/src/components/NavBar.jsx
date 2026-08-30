import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="flex flex-row gap-10 text-3xl items-center justify-center font-bold">
      <Link to="/" className="hover:text-red-400">Home</Link>
      <Link to="/about" className="hover:text-red-400">About Us</Link>
      <Link to="/contact" className="hover:text-red-400">Contact</Link>
      <Link to="/help" className="hover:text-red-400">Help</Link>
    </div>
  )
}

export default NavBar
