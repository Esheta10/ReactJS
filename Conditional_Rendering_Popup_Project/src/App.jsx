import React, {useState} from 'react'
import Popup from './components/Popup';

const App = () => {
  
  const [popup, setPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);

  return (
    <div className="flex items-center justify-center my-50 gap-6">
         <div>
          <button onClick={()=>setPopup(true)} className="bg-red-200 p-4 rounded-full border-2 cursor-pointer font-medium">Delete Popup</button>
          {/* Delete Popup */}
          <Popup popup={popup} setPopup={setPopup} title={"Delete"} description={"Are you sure you want to delete this?"}/>
        </div>

         <div>
          <button onClick={()=>setEditPopup(true)} className="bg-green-100 p-4 rounded-full border-2 cursor-pointer font-medium">Edit Popup</button>
          {/* Edit Popup */}
          <Popup popup={editPopup} setPopup={setEditPopup} title={"Edit"} description={"Are you sure you want to edit this?"}/>
        </div>
    </div>
  )
}

export default App
