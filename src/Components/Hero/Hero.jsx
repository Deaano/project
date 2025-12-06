import React from 'react'
import './Hero.css'
import hero from '../../Assets/Images/Hero.png'

const Hero = () => {
  return (
    <>
        <img src={hero} alt="" className="main-hero" />
    </>
  )
}

export default Hero