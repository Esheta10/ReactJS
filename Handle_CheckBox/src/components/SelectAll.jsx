import React, {useState} from 'react'

const SelectAll = () => {

  const [languages, setLanguages] = useState({
    html: false,
    css: false,
    js: false
  })

  // determine if every language is currently selected
  const isAllChecked = Object.values(languages).every(item => item === true)
  console.log(isAllChecked);

  // toggle all checkboxes -> on / off
  const handleSelectAll = (e) => {

    const isChecked = e.target.checked;

    setLanguages({
        html: isChecked,
        css: isChecked,
        js: isChecked
    })
  }

  // toggle an individual checkbox
  const handleChange = (e) => {

    const {name, checked} = e.target;

    setLanguages((languages) =>( {
        ...languages,
        [name] : checked

    }))
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10 text-2xl">
        <label htmlFor="select-all">
            {/* Select All Checkbox */}
            <input id="select-all" type="checkbox" checked={isAllChecked} onChange={handleSelectAll}/>
                 Select All 
        </label>

        <hr></hr>
        {/* Individual Language Checkboxes */}

        {/* html */}
            <label htmlFor="html">
                <input id="html" name="html" type="checkbox" checked={languages.html} onChange={handleChange}/>
                    {languages.html && " HTML Selected"}
            </label>

        {/* css */}
            <label htmlFor="css">
                <input id="css" name="css" type="checkbox" checked={languages.css} onChange={handleChange}/>
                    {languages.css && " CSS Selected"}
            </label>

        {/* javascript */}
            <label htmlFor="js">
                <input id="js" name="js" type="checkbox" checked={languages.js} onChange={handleChange}/>
                    {languages.js && " JS Selected"}
            </label>
    </div>
  )
}

export default SelectAll

