import React from 'react'
import gardenLightingBanner from '../Assets/Images/gardenLightingBanner.png'
import { Link } from 'react-router-dom'
import bbq from '../Assets/Images/gasBBQ.webp'
import gardenFurniture from '../Assets/Images/gardenFurniture2.webp'
import lawnmower from '../Assets/Images/lawnmower.webp'


const GardenLights = () => {

  const backToTop = () =>{ window.scrollTo({top:'0' ,left:'0'})}

  return (
    <>
    
    <img src={gardenLightingBanner} alt="" className="banner" />
    
    
    <div className="category-container">
     <Link onClick={backToTop} to='/StandingLamps' style={{textDecoration:'none', color:'black'}}><div>
        <img src={bbq} alt="" />
        <p>Standing Lamps</p>
      </div></Link>

     <Link onClick={backToTop}  to='/WallLights' style={{textDecoration:'none', color:'black'}}><div>
        <img src={lawnmower} alt="" />
        <p>Wall Lights</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/HeatLamps' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Heat Lamps</p>
      </div></Link>

       <Link onClick={backToTop} to='/SpotLights' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Spot Lights</p>
      </div></Link>
    </div>

    </>
  )
}

export default GardenLights