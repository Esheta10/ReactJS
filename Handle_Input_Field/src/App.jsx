import React , {useState, useRef} from 'react'
import EarlierMultipleInputFields from './EarlierMultipleInputFields';
import LatestMultipleInputFields from './LatestMultipleInputFields';


const App = () => {
  const inputRef = useRef(null);

  const submit = () => {
    console.log(inputRef?.current?.value);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-4 text-2xl">
{/* 
      <input ref={inputRef} type="text" placeholder="Enter your name..." className="text-2xl border-3 rounded-md"/>
      <button onClick={submit}>Submit</button> */}

      <EarlierMultipleInputFields/>
      <LatestMultipleInputFields/>
    </div>
  )
}

export default App


