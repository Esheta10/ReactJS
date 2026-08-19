import React, {useState} from 'react'
import { FiMenu } from "react-icons/fi";

const NavBar = () => {

 const [mobileView, setMobileView] = useState(false);

  return (
    <div className="bg-blue-300 w-full text-2xl flex flex-row items-center justify-between p-4 font-serif">
      <h1 className="font-bold">Logo</h1>
        <div className="flex items-center gap-6 max-[720px]:hidden">
            {/* maximum to maximum 720px tak hidden rahega, uske baad dikhega */}
            {/* 720 pixel tak display hidden rahega ussey jaise hi bara hoga, ye normal size pe aa jayega */}
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Services</a>
        </div>

        <div className="flex gap-2">
             <span className="text-4xl">🛒</span>
            <span className="text-4xl min-[720px]:hidden" onClick={()=>setMobileView(true)}><FiMenu /></span>
            {/* Hint: minimum to minimum 720px tak hi dikhega */}
            {/* 720px jab tak screen size nahi hoga tab tak hidden rahega, uske baad dikhega  */}
        </div>

        {/* Mobile-view */}
        {/* Animation */}
        <div className={`absolute top-0 left-0 h-screen w-[300px] bg-blue-100 flex flex-col
         ${mobileView ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>

                    {/* ❌ button logic */}
                    <button className="absolute top-0 right-0 p-2 cursor-pointer text-lg opacity-70" 
                    onClick={()=>setMobileView(false)}>❌</button>

                    {/* Menu Items */}
                    <a href="" className="hover:bg-blue-200/50 py-4 flex items-center justify-center mt-5">Home</a>
                    <a href="" className="hover:bg-blue-200/50 py-4 flex items-center justify-center">About Us</a>
                    <a href="" className="hover:bg-blue-200/50 py-4 flex items-center justify-center">Contact Us</a>
                    <a href="" className="hover:bg-blue-200/50 py-4 flex items-center justify-center">Services</a>
        </div>

    </div>
  )
}

export default NavBar


