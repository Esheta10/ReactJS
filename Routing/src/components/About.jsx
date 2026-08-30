import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className="flex items-center justify-center text-2xl">
      <div className="w-full h-screen mt-5 bg-blue-950 text-white text-center py-10 text-center text-4xl font-bold">About Us</div>
      <Outlet/>
      <div className="w-[200px] h-[200px] bg-blue-200 absolute"></div>
    </div>
  )
}

export default About

