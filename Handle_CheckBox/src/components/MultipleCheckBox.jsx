import React,{useState} from 'react'

const MultipleCheckBox = () => {

    const [isHTML, setIsHTML] = useState(false);
    const [isCSS, setIsCSS] = useState(false);
    const [isJS, setIsJS] = useState(false);


  return (
    <div className='flex flex-col items-center justify-center text-2xl mt-8 gap-4'>
        {/* HTML */}
        <label htmlFor="html">
            <input id="html" type="checkbox" checked={isHTML} onChange={(e) => setIsHTML(e.target.checked)}/>
             {isHTML && "HTML Selected"}
        </label>

        {/* CSS */}
        <label htmlFor="css">
            <input id="css" type="checkbox" checked={isCSS} onChange={(e) => setIsCSS(e.target.checked)}/>
             {isCSS && "CSS Selected"}
        </label>

        {/* JavaScript */}
        <label htmlFor="js">
            <input id="js" type="checkbox" checked={isJS} onChange={(e) => setIsJS(e.target.checked)}/>
            {isJS && "JavaScript Selected"}
        </label>

    </div>
  )
}

export default MultipleCheckBox
