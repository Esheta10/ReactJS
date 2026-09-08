import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Employees from './components/Employees/Employees'
import EmployeePopup from './components/EmployeePopup/EmployeePopup'
import DeletePopup from './components/DeletePopup/DeletePopup'


const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <EmployeePopup/>
      <DeletePopup/>
      <NavBar/>
      <div className="flex-1">
          <Employees/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
