import React from 'react'
import lawnmowerBanner from '../Assets/Images/lawnmowerBanner.png'
import { Link } from 'react-router-dom'
import bbq from '../Assets/Images/gasBBQ.webp'
import gardenFurniture from '../Assets/Images/gardenFurniture2.webp'
import lawnmower from '../Assets/Images/lawnmower.webp'


const LawnmowersCategory = () => {

  const backToTop = () =>{ window.scrollTo({top:'0' ,left:'0'})}

  return (
    <>
    
    <img src={lawnmowerBanner} alt="" className="banner" />


    <div className="category-container">
     <Link onClick={backToTop} to='/Lawnmowers' style={{textDecoration:'none', color:'black'}}><div>
        <img src={bbq} alt="" />
        <p>Lawnmowers</p>
      </div></Link>

     <Link onClick={backToTop} to='/Strimmers' style={{textDecoration:'none', color:'black'}}><div>
        <img src={lawnmower} alt="" />
        <p>Strimmers</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/RideOnMowers' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Ride On lawnmowers</p>
      </div></Link>

       <Link onClick={backToTop} to='/AutomatedLawnmowers' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Automated Lawnmowers</p>
      </div></Link>
      
      </div>
    </>
  )
}

export default LawnmowersCategory