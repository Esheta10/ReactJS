import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Help from './components/Help'
import A1 from './components/A1'
import A2 from './components/A2'


const App = () => {
  return (
    <div className="w-full min-h-screen">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/about" element={<About/>}>About Us
            <Route path="a1" element={<A1/>}></Route>
            <Route path="a2" element={<A2/>}></Route>
        </Route>
        <Route path="/contact" element={<Contact/>}>Contact</Route>
        <Route path="/help" element={<Help/>}>Help</Route>
      </Routes>
    </div>
  )
}

export default App
