import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Routes, Route} from "react-router-dom"
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <>
      {/* Navbar hamesha top par rahega */}
      <Nav/> 

      {/* Sirf pages badalenge */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact-us" element={<Contact/>}/> 
      </Routes>

      {/* Footer hamesha bottom par rahega */}
      <Footer/>
    </>
  )
}

export default App