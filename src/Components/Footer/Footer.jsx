import React from 'react'
import './Footer.css'
import leaf from '../../Assets/Images/leaf1.png'

const Footer = () => {
  return (
    <>
    
    <div className="footer-container">
      <div className="footer-logo-title-container">
        <img src={leaf} alt="" />
        <h2>Grill And Grove</h2>
      </div>
      <div className="social-media-icon-container">
        <img src={leaf} alt="" />
        <img src={leaf} alt="" />
        <img src={leaf} alt="" />
      </div>
      <div className="copyright">
        <p>@CopyRight Reserved 2026</p>
      </div>
    </div>
    
    </>
  )
}

export default Footer