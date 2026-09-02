import React from 'react'
import NavBar from "./components/NavBar"
import Category from './components/Category'
import News from './page/News'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
       <NavBar/>
       <Category/>
       <News/>
       <Footer/>
    </div>
  )
}

export default App
