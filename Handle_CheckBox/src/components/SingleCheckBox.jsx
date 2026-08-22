import React, {useState} from 'react'

const SingleCheckBox = () => {
 const [isChecked, setIsChecked] = useState(true);
 
   console.log(isChecked);
 
   const onChange = (e) => {
     setIsChecked(e.target.checked);
   }
   return (
     <div className="flex items-center justify-center gap-6 text-2xl">
         <label htmlFor="cb">
             <input id="cb" type="checkbox" onChange={onChange} checked={isChecked} /> Terms & Conditions
         </label>
     </div>
   )
}

export default SingleCheckBox
