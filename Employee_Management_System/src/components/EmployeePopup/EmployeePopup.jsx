import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { closeEmployeePopup } from "../../store/features/popup/popup.slice";


const EmployeePopup = () => {

  const dispatch = useDispatch();
  const popup = useSelector(state => state.popup.employeePopup)

  if(!popup) return null;
  return (
    <div onClick={()=>dispatch(closeEmployeePopup())} className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center mt-15 text-2xl bg-black/80">
      <fieldset onClick={(e)=>e.stopPropagation()} className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-7">
        
        <label className="label">Profile URL</label>
        <input type="text" className="input" placeholder="Profile URL" />

        <label className="label">Name</label>
        <input type="text" className="input" placeholder="Enter your name..." />

        <label className="label">E-mail</label>
        <input type="email" className="input" placeholder="Enter your e-mail..." />

        <label className="label">About</label>
        <textarea className="textarea" placeholder="Tell us about yourself"></textarea>

        <button className="btn btn-soft btn-info mt-2">Submit</button>
      </fieldset>
    </div>
  );
};

export default EmployeePopup;
