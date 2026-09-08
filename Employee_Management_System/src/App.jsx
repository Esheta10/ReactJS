import React, {useEffect} from 'react'
import {useDispatch} from "react-redux"
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Employees from './components/Employees/Employees'
import EmployeePopup from './components/EmployeePopup/EmployeePopup'
import DeletePopup from './components/DeletePopup/DeletePopup'
import { fetchEmployees } from './store/features/employee/employee.thunk'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  })

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
