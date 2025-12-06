import React from 'react'
import '../Pages/GlobalCSS/Categorys.css'
import bbq from '../Assets/Images/gasBBQ.webp'
import swingSets from '../Assets/Images/climbingFrames.webp'
import camping from '../Assets/Images/camping.webp'
import gardenSheds from '../Assets/Images/gardenSheds.webp'
import gardenFurniture from '../Assets/Images/gardenFurniture2.webp'
import gardenLights from '../Assets/Images/gardenLights.webp'
import gardenTools from '../Assets/Images/gardenTools.webp'
import gazebo from '../Assets/Images/gazebo.webp'
import swimmingPool from '../Assets/Images/swimmingpools.webp'
import trampoline from '../Assets/Images/trampolines.webp'
import lawnmower from '../Assets/Images/lawnmower.webp'
import sports from '../Assets/Images/footballGoal.webp'
import { Link } from 'react-router-dom'

const Categorys = () => {

  const backToTop = () =>{ window.scrollTo({top:'0' ,left:'0'})}
  
  return (
    <>
    
    <div className="category-container">
     <Link onClick={backToTop} to='/BBQ' style={{textDecoration:'none', color:'black'}}><div>
        <img src={bbq} alt="" />
        <p>BBQ's</p>
      </div></Link>

     <Link onClick={backToTop} to='/LawnmowersCategory' style={{textDecoration:'none', color:'black'}}><div>
        <img src={lawnmower} alt="" />
        <p>Lawnmowers</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/GardenFurniture' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Garden Furniture</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/GardenLighting' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenLights} alt="" />
        <p>Garden Lighting</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/SwimmingPools' style={{textDecoration:'none', color:'black'}}><div>
        <img src={swimmingPool} alt="" className='swimmingpool'/>
        <p>Swimming Pools</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/Gazebos' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gazebo} alt="" />
        <p>Gazebo's</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/GardenSheds' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenSheds} alt="" />
        <p>Garden Sheds</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/Camping' style={{textDecoration:'none', color:'black'}}><div>
        <img src={camping} alt="" className='camping' />
        <p>Camping</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/SwingSets' style={{textDecoration:'none', color:'black'}}><div>
        <img src={swingSets} alt="" className='swingSet' />
        <p>Swings & Slides</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/Decking' style={{textDecoration:'none', color:'black'}}><div>
        <img src={sports} alt="" />
        <p>Decking</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/Trampolines' style={{textDecoration:'none', color:'black'}}><div>
        <img src={trampoline} alt="" />
        <p>Trampolines</p>
      </div></Link>

      <Link onClick={backToTop} to='/GardenTools' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenTools} alt="" />
        <p>Garden Tools</p>
      </div></Link>
      
      
      
      
      
      
      
      
      
      
      
    </div>
    
    </>
  )
}

export default Categorys