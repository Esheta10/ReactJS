import React, {useState} from 'react'

const RadioButtonBasics = () => {


  const [gender, setGender] = useState("other");
  console.log(gender);
 
   return (
     <div className="flex flex-col items-center justify-center gap-6 text-2xl mt-20">
 
     {/* Here, the radio buttons are grouped under Gender */}
 
       {/* Male */}
       <label htmlFor="male">
         <input id="male" type="radio" name="gender" value={"male"} onChange={(e)=>setGender(e.target.value)} checked={gender === "male"} />
         Male
       </label>
 
       {/* Female */}
       <label htmlFor="female">
         <input id="female" type="radio" name="gender" value={"female"} onChange={(e)=>setGender(e.target.value)} checked={gender === "female"}/>
         Female
       </label>
 
       {/* Other */}
       <label htmlFor="other">
         <input id="other" type="radio" name="gender" value={"other"} onChange={(e)=>setGender(e.target.value)} checked={gender === "other"}/>
         Other
       </label>
     </div>
   )
}

export default RadioButtonBasics
