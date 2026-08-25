import React, {useRef} from 'react'
import GenerateRandomNumber from './GenerateRandomNumber';

const App = () => {

  // const inputRef = useRef();
  // const divRef = useRef();

  // const handleClick = () => {
  //     console.log(inputRef);
  //     console.log(inputRef.current);
  //     inputRef.current.focus();
  // }

  // const changeColor = () => {
  //   divRef.current.classList.replace("!bg-blue-400", "!bg-amber-400")
  // }
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-20 text-2xl">

        {/* Input Focus
        <input ref={inputRef} type="text" placeholder="Enter Your data..." className="p-4 border-1"/>
        <button onClick={handleClick} className="!bg-red-800 rounded-full p-4 border-2 cursor-pointer">Click</button>

        {/* Change Background Color */}
        {/* <div ref={divRef}className="!bg-blue-400 p-40"></div>
        <button onClick={changeColor} className="!bg-red-800 rounded-full p-4 border-2 cursor-pointer">Click</button> */} 
    
        <GenerateRandomNumber/>
    </div>
  )
}

export default App



