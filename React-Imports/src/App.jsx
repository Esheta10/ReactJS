import React from 'react'
import Header, {Card1, Card2} from "./Header"
import icon from "./public/favicon.svg"
import data from "./data.json"
import "./App.css"

const App = () => {
  console.log(data);
  return (
    <div>
      <Header/>
      <Card1/>
      <Card2/>
      <img src={icon} alt="icon image" />
    </div>
  )
}

export default App
