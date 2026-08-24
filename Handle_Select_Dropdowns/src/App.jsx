import React, {useState} from 'react'
import PaymentMethods from './PaymentMethods'
import CountriesDropdown from './CountriesDropdown'
import CascadingSelect from './CascadingSelect'

const App = () => {

  const [languages, setLanguages] = useState("C++")

  return (
   <div>
       {/* <div className="flex flex-col items-center justify-center gap-6 text-2xl mt-20">
        <select value={languages} onChange = {(e) => setLanguages(e.target.value)} className="p-3 border-2">
          <option value="">---Select---</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C#">C#</option>
        </select>    
      </div>

    <PaymentMethods/>

    <CountriesDropdown/> */}

    <CascadingSelect/>
    
   </div>
  )
}

export default App
