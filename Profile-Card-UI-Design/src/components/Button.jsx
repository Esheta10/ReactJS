import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

function Button() {
  return (
    <div>
      <div class="flex flex-row items-center">
        <div className="flex items-center bg-blue-950 text-white text-md rounded-full h-[30px] w-[100px] pl-4 m-5 mt-[1px] cursor-pointer hover:bg-blue-900">
        Subscribe
      </div>
      <div className="flex items-center bg-blue-950 text-white text-md rounded-full h-[30px] w-[100px] pl-5 m-5  mt-[1px] cursor-pointer hover:bg-blue-900">
        Message
      </div>
      </div>
      <div className="flex flex-row items-center justify-center mr-4 mb-2">
        <div className="flex items-center text-lg ms-4">
            <CiHeart />
            <span className="text-sm">60.4k</span>
            <div className="h-[16px] w-[1px] bg-black/30 ms-1"></div>
        </div>
        <div className="flex items-center text-lg ms-2">
            <IoShareSocialOutline />
            <span className="text-sm ms-1">4k</span>
            <div className="h-[16px] w-[1px] bg-black/30 ms-1"></div>
        </div>
        <div className="flex items-center text-lg ms-2">
            <FaRegMessage />
            <span className="text-sm ms-1">12k</span>
        </div>
      </div>
    </div>
  )
}

export default Button
