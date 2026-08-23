import React, {useState} from 'react'

const FormData = () => {

    const [formData, setFormData] = useState({
        email: "",
        tc: false
    })

    const handleChange = (e) => {

        const {value, checked, type, name} = e.target;

        setFormData((formData) => ({
            ...formData,

            [name] : type === "checkbox" ? checked : value,
         }))
    }

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-2xl mt-10">

      <label htmlFor="email">
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="px-6 py-3 border-3"/>
      </label>
    
        <label htmlFor="terms">
            <input id="terms" name="tc" type="checkbox" checked={formData.tc} onChange={handleChange}/> Terms & Conditions
        </label>
    </div>
  )
}

export default FormData
