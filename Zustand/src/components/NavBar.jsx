import React from 'react'
import useMyStore from '../store';

const NavBar = () => {

  const state = useMyStore();
  console.log(state);

  const handleClick = () => {
    state.increment();
  }

  const handleNameClick = () => {
    state.capitalizeName();
  }

  return (
    <div className="bg-red-900 text-2xl p-5">
      NavBar
      <p>{state.name}</p>
      <p>{state.count}</p>
      <button className="bg-black border-2 rounded-full p-3 text-2xl" onClick={handleClick}>Increment</button>
      <button className="bg-black border-2 rounded-full p-3 text-2xl" onClick={handleNameClick}>Capitalize</button>
    </div>
  )
}

export default NavBar
