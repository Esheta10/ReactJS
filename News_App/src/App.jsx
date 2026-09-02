import React from 'react'
import NavBar from "./components/NavBar"
import Category from './components/Category'
import News from './page/News'

const App = () => {
  return (
    <div>
       <NavBar/>
       <Category/>
       <News/>
    </div>
  )
}

export default App
