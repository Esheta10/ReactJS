import {React, useState} from 'react'

function App() {


  const [color,setColor] = useState("blue");
  function handleClick(){
        setColor("black");
  }
  return (
    <div>
      <h1>Color changed to: {color}</h1>
      <button onClick={handleClick}>Black</button>
    </div>
  )
}

export default App
