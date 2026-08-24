import React, {useState} from 'react'

const CountriesDropdown = () => {

  const [country, setCountry] = useState("");
  const countries = ["India", "USA", "Canada", "Cuba", "France", "Germany","Italy", "Spain"];
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-2xl mt-10">
      <select value={country} onChange={(e)=>setCountry(e.target.value)} className="p-3 border-2">
            <option value="">--Select Country--</option>
            {
                countries.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))
            }
      </select>
    </div>
  )
}

export default CountriesDropdown
