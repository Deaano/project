import React from 'react'
import gardenFurnitureBanner from '../Assets/Images/gardenFurnitureBanner.png'
import { Link } from 'react-router-dom'
import bbq from '../Assets/Images/gasBBQ.webp'
import gardenFurniture from '../Assets/Images/gardenFurniture2.webp'
import lawnmower from '../Assets/Images/lawnmower.webp'
import '../Pages/GlobalCSS/Categorys.css'
const GardenFurniture = () => {

const backToTop = () =>{ window.scrollTo({top:'0' ,left:'0'})}

  return (
    <>
    
    <img src={gardenFurnitureBanner} alt="" className="banner" />


    <div className="category-container">
     <Link onClick={backToTop} to='/Rattan' style={{textDecoration:'none', color:'black'}}><div>
        <img src={bbq} alt="" />
        <p>Rattan Furniture</p>
      </div></Link>

     <Link onClick={backToTop} to='/EggChairs' style={{textDecoration:'none', color:'black'}}><div>
        <img src={lawnmower} alt="" />
        <p>Egg Chairs</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/SwingingChairs' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Swinging Chairs</p>
      </div></Link>

       <Link onClick={backToTop} to='/TableAndChairs' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Table And Chairs</p>
      </div></Link>
    </div>
    </>
  )
}

export default GardenFurniture