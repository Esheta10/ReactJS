import React from 'react'
import './Hero.css'
import Card from '../Card/Card'
import lamborghini from "../../assets/lamborghini.jpg"
import rangerover from '../../assets/range-rover.jpg'
import ferrari from '../../assets/ferrari.jpg'

function Hero() {
  return (
    <div className="hero">
       <Card name="Lamborghini" price="80 lakh rupees" imageUrl={lamborghini}/>
        <Card name="Range Rover" price="50 lakh rupees" imageUrl={rangerover}/>
        <Card name="Ferrari" price="1.2 crore rupees" imageUrl={ferrari}/>
    </div>
  )
}

export default Hero
