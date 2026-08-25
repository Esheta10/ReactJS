import React, {useState, useRef, useEffect} from 'react'

const GenerateRandomNumber = () => {

    const [randomNumber, setRandomNumber] = useState(0);
    const renderCountRef = useRef(0);

    const generateRandomNumber = () => {
        
        const num = Math.floor(Math.random() * 100);
        setRandomNumber(num);
    }

    useEffect(() => {
    renderCountRef.current += 1;
    });


  return (
    <div className="flex flex-col gap-6 mt-10">
        <h1>Random Number: {randomNumber}</h1>
        <h4>Render Count: {renderCountRef.current}</h4>
        <button onClick={generateRandomNumber} className="p-4 border-2 rounded-full">Click</button>
    </div>
  )
}

export default GenerateRandomNumber
