import React from 'react'
import gardenToolsBanner from '../Assets/Images/gardenToolsBanner.png'
import { Link } from 'react-router-dom'
import bbq from '../Assets/Images/gasBBQ.webp'
import gardenFurniture from '../Assets/Images/gardenFurniture2.webp'
import lawnmower from '../Assets/Images/lawnmower.webp'

const GardenTools = () => {

  const backToTop = () =>{ window.scrollTo({top:'0' ,left:'0'})}

  return (
    <>
    
    <img src={gardenToolsBanner} alt="" className="banner" />

    <div className="category-container">
     <Link onClick={backToTop} to='/GeneralTools' style={{textDecoration:'none', color:'black'}}><div>
        <img src={bbq} alt="" />
        <p>General Tools</p>
      </div></Link>

     <Link onClick={backToTop} to='/LeafBlowers' style={{textDecoration:'none', color:'black'}}><div>
        <img src={lawnmower} alt="" />
        <p>Leaf Blowers</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/Chainsaws' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Chainsaws</p>
      </div></Link>

       <Link onClick={backToTop} to='/HedgeStrimmers' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Hedge Strimmers</p>
      </div></Link>
    </div>

    </>
  )
}

export default GardenTools