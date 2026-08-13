import React from 'react'
import "./App.css"

const App = () => {

  let arr=[1,2,3,4,5];

  return (
    <div>
      {React.createElement("h1", null, "Hello, World!")}
      <h2 style={{backgroundColor: "blue"}}>Bg is blue</h2>

      { 
        arr.map((elem)=>{
            return elem;
          })
      }
    </div>
  )
}

export default App
