import React from 'react'
import swingSetBanner from '../Assets/Images/swingSetBanner.png'
import { Link } from 'react-router-dom'
import bbq from '../Assets/Images/gasBBQ.webp'
import gardenFurniture from '../Assets/Images/gardenFurniture2.webp'
import lawnmower from '../Assets/Images/lawnmower.webp'

const SwingSets = () => {

  const backToTop = () =>{ window.scrollTo({top:'0' ,left:'0'})}

  return (
    <>
    
    <img src={swingSetBanner} alt="" className="banner" />
    
    <div className="category-container">
     <Link onClick={backToTop} to='/ClimbingFrames' style={{textDecoration:'none', color:'black'}}><div>
        <img src={bbq} alt="" />
        <p>Climbing Frames</p>
      </div></Link>

     <Link onClick={backToTop} to='/Swings' style={{textDecoration:'none', color:'black'}}><div>
        <img src={lawnmower} alt="" />
        <p>Swings</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/Slides' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Slides</p>
      </div></Link>

       <Link onClick={backToTop} to='/OtherGardenToys' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Other Garden Toys</p>
      </div></Link>
    </div>
    </>
  )
}

export default SwingSets