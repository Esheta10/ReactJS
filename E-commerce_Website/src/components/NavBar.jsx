import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/store-logo.png'
const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4 text-3xl gap-6 bg-blue-950 text-white font-serif">
    <div>
        <img src={logo} alt="logo"  className="w-18 h-16 object-contain"/>
    </div>
      <div className="flex items-center justify-center gap-10">
        <Menu to={"/"} title={"Home"}/>
        <Menu to={"/products"} title={"Products"}/>
      </div>
    </div>
  )
}

const Menu = ({to,title}) => {
  return (
    <NavLink to={to}  className={({isActive}) => isActive ? "text-[tomato]" : ""}>{title}</NavLink>
  )
}
export default NavBar
