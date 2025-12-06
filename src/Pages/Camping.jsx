import React from 'react'
import campingBanner from '../Assets/Images/campingBanner.png'
import { Link } from 'react-router-dom'
import bbq from '../Assets/Images/gasBBQ.webp'
import gardenFurniture from '../Assets/Images/gardenFurniture2.webp'
import lawnmower from '../Assets/Images/lawnmower.webp'

const Camping = () => {

  const backToTop = () =>{ window.scrollTo({top:'0' ,left:'0'})}

  return (
    <>
    
    <img src={campingBanner} alt="" className="banner" />
    

    <div className="category-container">
         <Link onClick={backToTop} to='/TwoSixManTents' style={{textDecoration:'none', color:'black'}}><div>
            <img src={bbq} alt="" />
            <p>2-6 Man Tents</p>
          </div></Link>
    
         <Link onClick={backToTop} to='/EightManAndAbove' style={{textDecoration:'none', color:'black'}}><div>
            <img src={lawnmower} alt="" />
            <p>8 Man And Above Tents</p>
          </div></Link>
          
          <Link onClick={backToTop} to='/CampingEquipment' style={{textDecoration:'none', color:'black'}}><div>
            <img src={gardenFurniture} alt="" />
            <p>Camping Equipment</p>
          </div></Link>
    
           <Link onClick={backToTop} to='/Glamping' style={{textDecoration:'none', color:'black'}}><div>
            <img src={gardenFurniture} alt="" />
            <p>Glamping</p>
          </div></Link>

        </div>
    </>
  )
}

export default Camping