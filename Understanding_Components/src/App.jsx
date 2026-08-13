import React from 'react'
import "./App.css"
import Card from './Card'

const App = () => {
  return (
    <div>
        <div className="grid">
          <Card name="Alex" role="Intern"/>
          <Card name="Ronaldinho" role="SDE-1" />
          <Card name="Lamine" role="AI Engineer"/>
          <Card name="Pedro" role="Analyst"/>
      </div>
    </div>
  )
}

export default App
