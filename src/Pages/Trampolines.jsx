import React from 'react'
import TrampolineBanner from '../Assets/Images/TrampolineBanner.png'
import { Link } from 'react-router-dom'
import bbq from '../Assets/Images/gasBBQ.webp'
import gardenFurniture from '../Assets/Images/gardenFurniture2.webp'
import lawnmower from '../Assets/Images/lawnmower.webp'

const Trampolines = () => {

  const backToTop = () =>{ window.scrollTo({top:'0' ,left:'0'})}

  return (
    <>
    
    <img src={TrampolineBanner} alt="" className="banner" />

    <div className="category-container">
         <Link onClick={backToTop} to='/IndoorTrampolines' style={{textDecoration:'none', color:'black'}}><div>
            <img src={bbq} alt="" />
            <p>Indoor Trampolines</p>
          </div></Link>
    
         <Link onClick={backToTop} to='/SixEightFtTrampolines' style={{textDecoration:'none', color:'black'}}><div>
            <img src={lawnmower} alt="" />
            <p>6-8ft Trampolines</p>
          </div></Link>
          
          <Link onClick={backToTop} to='/TenTwelveFtTrampolines' style={{textDecoration:'none', color:'black'}}><div>
            <img src={gardenFurniture} alt="" />
            <p>10-12ft Trampolines</p>
          </div></Link>
    
           <Link onClick={backToTop} to='/TwelveAndAbove' style={{textDecoration:'none', color:'black'}}><div>
            <img src={gardenFurniture} alt="" />
            <p>12ft And Above</p>
          </div></Link>
        </div>
    
    </>
  )
}

export default Trampolines