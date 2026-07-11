import {React, useState, useEffect} from 'react'

function App() {
  
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  
useEffect(()=>{
console.log("Renders on mount and then only when the value of dependency, here --> count1 changes but for count2 it won't run on every change since its not present in dependency");
},[count1])
  return (
    <div>
      <button onClick={()=>setCount1(count1+1)}> Count1: {count1}</button> <br/> <br/>
      <button onClick={()=>setCount2(count2+1)}> Count2: {count2}</button>
    </div>
  )
}

export default App