import React from 'react'
import UserCard from './components/UserCard'

function App() {
  return (
    <div className="grid grid-cols-4 gap-4 pt-4 pl-4 pr-4 max-[1200px]:grid-cols-3 ">
     <UserCard/>
     <UserCard/>
     <UserCard/>
     <UserCard/>
    </div>
  )
}

export default App
