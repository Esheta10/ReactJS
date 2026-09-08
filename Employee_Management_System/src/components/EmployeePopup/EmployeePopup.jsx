import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { closeEmployeePopup } from "../../store/features/popup/popup.slice";
import { postEmployees } from "../../store/features/employee/employee.thunk";

const EmployeePopup = () => {

  const dispatch = useDispatch();
  const [formDetails, setFormDetails] = useState({
    image: '',
    firstName: '',
    lastName:'',
    email: '',
    address: '',
    highlight: false,
  }) 
  const popup = useSelector(state => state.popup.employeePopup)

  if(!popup) return null;

  const handleInputChange = (e) => {

    const {name, value} = e.target;

    setFormDetails({
      ...formDetails,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

        // Dispatch postEmployees with formDetails
        dispatch(postEmployees(formDetails));

        // Close Popup
        dispatch(closeEmployeePopup());

        // Reset form
        setFormDetails({
          image: '',
          firstName: '',
          lastName:'',
          email: '',
          address: '',
          highlight: false,
        });

  }
  console.log(formDetails);

  return (
    <div onClick={()=>dispatch(closeEmployeePopup())} className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center mt-15 text-2xl bg-black/80">
      <fieldset onClick={(e)=>e.stopPropagation()} className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-7">
        
        <label className="label">Profile URL</label>
        <input type="text" name="image" value={formDetails.image} className="input" placeholder="Profile URL" onChange={handleInputChange}/>

        <label className="label">First Name</label>
        <input type="text" name="firstName" value={formDetails.firstName} className="input" placeholder="Enter your name..." onChange={handleInputChange}/>

         <label className="label">Last Name</label>
        <input type="text" name="lastName" value={formDetails.lastName} className="input" placeholder="Enter your name..." onChange={handleInputChange}/>

        <label className="label">E-mail</label>
        <input type="email" name="email" value={formDetails.email} className="input" placeholder="Enter your e-mail..." onChange={handleInputChange} />

        <label className="label">Address</label>
        <textarea className="textarea" name="address" value={formDetails.address} placeholder="Enter your address..." onChange={handleInputChange}></textarea>

        <button className="btn btn-soft btn-info mt-2" onClick={handleSubmit}>Submit</button>
      </fieldset>
    </div>
  );
};

export default EmployeePopup;
