import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement, changeByValue} from "../features/counter/counterSlice"

const Counter = () => {
  
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const state = useSelector(state => state.counter);
  console.log(state)

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }
  const handleChangeByValue = () => {
    dispatch(changeByValue(value));
  }
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-20">
        <h2>{state.value}</h2>
        <button className="p-4 border-2 rounded-lg" onClick={handleIncrement}>Increment</button>
        <button className="p-4 border-2 rounded-lg"onClick={handleDecrement}>Decrement</button>

        {/* Change by value */}
        <input type="number" onChange={(e) => setValue(e.target.value)} className="px-6 py-2 rounded-md border-2"/>
        <button className="p-4 border-2 rounded-lg" onClick={handleChangeByValue}>Change By Value</button>
    </div>
  )
}

export default Counter
