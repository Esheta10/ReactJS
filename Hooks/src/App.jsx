import {React, useState, useRef} from 'react'

function App() {

  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  function startTimer(){
    timeRef.current = setInterval(()=>{
      setTime((prevTime) => prevTime + 1)
    }, 1000)
  }

  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function resetTimer(){
      stopTimer();
      setTime(0);
  }

  return (
    <div>
      <h1>Stop-watch : {time} seconds</h1>
      <button onClick={startTimer}>Start Timer</button> <br/> <br/>
      <button onClick={stopTimer}>Stop Timer</button> <br/> <br/>
      <button onClick={resetTimer}>Reest Timer</button> <br/> <br/>
    </div>
  )
}

export default App

