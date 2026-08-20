import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
      <h1>Name is: {user.name} Age is: {user.age}</h1>
    </div>
  )
}

export default UserCard
