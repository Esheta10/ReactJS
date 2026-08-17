import React, {useState} from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+1);
  }
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={increment}>Increment</button>
      <h2>Count: {count}</h2>
    </div>
  )
}

export default App
