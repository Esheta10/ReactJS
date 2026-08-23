import React, { useState } from "react";

const GroupingCheckboxes = () => {
  const [languages, setLanguages] = useState({
    html: false,
    css: false,
    js: false,
  });

  const handleChange = (e) => {
    
    const {name, checked} = e.target;

    setLanguages((languages) => (
      {
        ...languages,
        [name]: checked,
      }
    ))
  };
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-20 text-2xl">
      {/* html */}
      <label htmlFor="html">
        <input
          id="html"
          type="checkbox"
          name="html"
          checked={languages.html}
          onChange={handleChange}
        />
        {languages.html && " HTML Selected"}
      </label>

      {/* css */}
      <label htmlFor="css">
        <input
          id="css"
          type="checkbox"
          name="css"
          checked={languages.css}
          onChange={handleChange}
        />
        {languages.css && " CSS Selected"}
      </label>

      {/* js */}
      <label htmlFor="js">
        <input
          id="js"
          type="checkbox"
          name="js"
          checked={languages.js}
          onChange={handleChange}
        />
        {languages.js && " JavaScript Selected"}
      </label>

    </div>
  );
};

export default GroupingCheckboxes;
