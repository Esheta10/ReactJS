import React from 'react'
import './App.css'
function Box({name="user", profession="Software Developer"}) {
  return (
    <div className="box">
      <h1>{name}</h1>
      <h1>{profession}</h1>
    </div>
  )
}

export default Box
