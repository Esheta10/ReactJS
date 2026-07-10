import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="" />
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
    </div>
  )
}

export default Card
