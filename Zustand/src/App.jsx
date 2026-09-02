import React from 'react'
import useMyStore from './store'
import NavBar from './components/NavBar';

const App = () => {

  const state = useMyStore();
  console.log(state);

  return (
    <div className="bg-blue-900 text-2xl">
      App
      <NavBar/>
    </div>
  )
}

export default App
