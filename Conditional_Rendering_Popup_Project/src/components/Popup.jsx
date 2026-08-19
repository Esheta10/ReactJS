import React, {useState} from 'react'

const Popup = ({popup, setPopup, title, description}) => {

  return (
    <div>
      {/* Popup */}
      {popup && 
        (<div className="bg-black/50 w-screen h-screen absolute top-0 left-0 ">
              <button className="absolute top-0 right-0 p-2 cursor-pointer text-2xl" onClick={()=>setPopup(false)}>❌</button>
             <div className="flex items-center justify-center my-30">
               <div className="bg-gray-700 w-[600px] h-[400px] rounded-2xl flex flex-col items-center justify-center gap-6">
                    <h1 className="text-4xl font-bold">{title} ⚠️</h1>
                    <p className="text-3xl font-medium">{description}</p>
                    <div className="flex flex-row gap-8 text-xl">
                        <button className="bg-green-500 px-5 py-2 rounded-[20px] border-2 cursor-pointer" onClick={()=>setPopup(false)}>Yes</button>
                        <button className="bg-red-500 px-5 py-2 rounded-[20px] border-2 cursor-pointer" onClick={()=>setPopup(false)}>No</button>
                    </div>
               </div>
             </div>
        </div>)
      }
    </div>
  )
}

export default Popup
