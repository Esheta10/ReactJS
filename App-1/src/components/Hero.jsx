import React from 'react'
import image1 from '../assets/stock-image-2.jpg'
import image2 from '../assets/stock-image-3.jpg'
import image3 from '../assets/stock-image-6.jpg'

function Hero() {
  return (
    <div className="hero">
      <img className="hero-img" src={image1} alt="image-1" width="400px" />
      <img className="hero-img" src={image2} alt="image-2" width="400px"/>
      <img className="hero-img" src={image3} alt="image-3" width="400px"/>
    </div>
  )
}

export default Hero
