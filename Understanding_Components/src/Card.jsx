import React, {useState} from 'react'

const Card = (props) => {

  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+1);
  }

  return (
    <div className="card">
      <div className="text">
        <h1>{props.name}</h1>
        <h3>{props.role}</h3>
        <h4>Count: {count}</h4>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  )
}

export default Card
