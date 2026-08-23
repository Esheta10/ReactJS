import React, {useState} from "react";

const GroupedRadioButtons = () => {
  const [gender, setGender] = useState("other");
  const genders = ["male", "female", "other"];

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-20 text-2xl">

      {/*    grouped radios -> 
             name: all radios share the same name
             value: value mein option hota hai like "male" , "female" etc etc....
             onChange: updates the state
             useState: controls selection
       */}
      {genders.map((item) => (
        <label key={item} htmlFor={item}>
          <input
            id={item}
            type="radio"
            name="gender" 
            value={item}
            checked={gender === item}
            onChange={(e) => setGender(e.target.value)}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default GroupedRadioButtons;
