import React from 'react'
import swimmingPoolBanner from '../Assets/Images/swimmingPoolsBanner.png'
import bbq from '../Assets/Images/gasBBQ.webp'
import lawnmower from '../Assets/Images/lawnmower.webp'
import { Link } from 'react-router-dom'

const SwimmingPools = () => {

  const backToTop = () =>{ window.scrollTo({top:'0' ,left:'0'})}

  return (
    <>
    
    <img src={swimmingPoolBanner} alt="" className="banner" />
    

      <div className="category-container">
     <Link onClick={backToTop} to='/swimmingPool' style={{textDecoration:'none', color:'black'}}><div>
        <img src={bbq} alt="" />
        <p>Swimming Pools</p>
      </div></Link>

     <Link onClick={backToTop} to='/HotTubs' style={{textDecoration:'none', color:'black'}}><div>
        <img src={lawnmower} alt="" />
        <p>Hot Tubs</p>
      </div></Link>

       <Link onClick={backToTop} to='/paddlingPools' style={{textDecoration:'none', color:'black'}}><div>
        <img src={bbq} alt="" />
        <p>paddling Pools</p>
      </div></Link>

     <Link onClick={backToTop} to='/PoolsForPets' style={{textDecoration:'none', color:'black'}}><div>
        <img src={lawnmower} alt="" />
        <p>pools for pets</p>
      </div></Link>
      
    </div>
    </>
  )
}

export default SwimmingPools