import React from 'react'
import "../App.css"

const Button = ({name, func}) => {
  return (
    <div>
      <button className="button" onClick={func}>{name}</button>
    </div>
  )
}

export default Button
