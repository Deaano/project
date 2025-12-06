import React from 'react'
import gardenShedBanner from '../Assets/Images/gardenShedBanner.png'
import { Link } from 'react-router-dom'
import bbq from '../Assets/Images/gasBBQ.webp'
import gardenFurniture from '../Assets/Images/gardenFurniture2.webp'
import lawnmower from '../Assets/Images/lawnmower.webp'

const GardenSheds = () => {

  const backToTop = () =>{ window.scrollTo({top:'0' ,left:'0'})}

  return (
    <>
    
    <img src={gardenShedBanner} alt="" className="banner" />
    

      <div className="category-container">
     <Link onClick={backToTop} to='/SmallWoodenSheds' style={{textDecoration:'none', color:'black'}}><div>
        <img src={bbq} alt="" />
        <p>Small Wooden Sheds</p>
      </div></Link>

     <Link onClick={backToTop} to='/MetalSheds' style={{textDecoration:'none', color:'black'}}><div>
        <img src={lawnmower} alt="" />
        <p>Metal Sheds</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/GardenOffices' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Garden Offices</p>
      </div></Link>

       <Link onClick={backToTop} to='/LargeWoodenSheds' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Large Wooden Sheds</p>
      </div></Link>
    </div>
    </>
  )
}

export default GardenSheds