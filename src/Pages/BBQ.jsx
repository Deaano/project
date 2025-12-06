import React from 'react'
import { Link } from 'react-router-dom'
import bbq from '../Assets/Images/gasBBQ.webp'
import gardenFurniture from '../Assets/Images/gardenFurniture2.webp'
import charcoalBBQ from '../Assets/Images/charcoalBBQ.webp'
import BBQBanner from '../Assets/Images/BBQBanner.png'

const BBQ = () => {

  const backToTop = () =>{ window.scrollTo({top:'0' ,left:'0'})}

  return (
    <>

    <img src={BBQBanner} alt="" className="banner" />
    
   <div className="category-container">
     <Link onClick={backToTop} to='/GasBBQ' style={{textDecoration:'none', color:'black'}}><div>
        <img src={bbq} alt="" />
        <p>Gas BBQ's</p>
      </div></Link>

     <Link onClick={backToTop} to='/CharcoalBBQ' style={{textDecoration:'none', color:'black'}}><div>
        <img src={charcoalBBQ} alt="" />
        <p>Charcoal BBQ's</p>
      </div></Link>
      
      <Link onClick={backToTop} to='/UtensilsAndEquipment' style={{textDecoration:'none', color:'black'}}><div>
        <img src={gardenFurniture} alt="" />
        <p>Utensils And Equipment</p>
      </div></Link>
      
      </div>

    </>
  )
}

export default BBQ