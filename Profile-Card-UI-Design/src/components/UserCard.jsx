import React from 'react'
import image from "../assets/Mypic.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Button from './Button';

function UserCard() {
  return (
    <div>
      {/* MainCard */}
      <div className=" bg-white shadow-2xl rounded-xl overflow-hidden relative">
        {/* Top-Banner */}
        <div className="w-full h-[150px] bg-blue-400 aspect-video">
          {/* Profile-Image Container */}
          <div className="absolute top-[100px] left-1/3">
                <img src={image} alt="" className="w-26 h-26 rounded-full object-cover border-3 border-blue-200 p-0.5 bg-white" />
          </div>
        </div>

        {/* Bottom-part */}
        <div className="flex flex-col items-center pt-16">
          <h1 className="font-bold font-4xl">Esheta Jaiswal</h1>
          <p>Software Engineer</p>
        </div>
        <div className="grid grid-cols-4 ms-3 p-4 text-2xl gap-0.5">
            <FaFacebook  className="bg-blue-500 text-white rounded-full p-1 text-2xl"/>
            <FaYoutube className="bg-red-500 text-white rounded-full p-1 text-2xl"/>
            <FaInstagram className="bg-red-400 text-white rounded-full p-1 text-2xl" />
            <CiTwitter className="bg-blue-200 text-black rounded-full p-1 text-2xl" />
        </div>
        <Button/>
      </div>
    </div>
  )
}

export default UserCard
