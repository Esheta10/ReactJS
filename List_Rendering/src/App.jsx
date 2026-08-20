import React from 'react'
import UserCard from './components/UserCard'

const App = () => {

  // const names = ["Alice", "Bob", "Charlie","Derek","Fred"]; // Normal Array

  // Array of Objects
  const users = [
        {
        id: 1,
        name: "Jake",
        age: 24
      },
      {
        id: 2,
        name: "Jason",
        age: 25
      },
      {
        id: 3,
        name: "Paul",
        age: 43
      }
  ]


  // const array = [
  //   ["books", "pen", "pencil"],
  //   ["Mathematics", "Geometry","Trigonometry"]
  // ]

  
  return (
    <div>
     <ul>
       {/* {
          names.map((name, index) => (
          <li key={index}>
            {name}
          </li>
        ))
      } */}


      {/* {
        user.map((user) => (
          <li key={user.id}>
              {user.name} - {user.age} years old
          </li>
        ))
      } */}

      {/* {
        array.map((items, index) => {
          
          console.log(items)

          return (
            <div>
              {items.map((nestedItems, nestedIndex) => (
                <li key={nestedIndex}>
                    {nestedItems}
                </li>
              ))}
            </div>
          )
        })
      } */}


      {
        users.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))
      }
     </ul>
    </div>
  )
}

export default App
