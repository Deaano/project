import React from 'react'
import gazeboBanner from '../Assets/Images/gazeboBanner.png' 
import ProductItem from '../Components/ProductItem/ProductItem'
import GazeboData from '../Assets/ProductData/GazeboData'
const Gazebos = () => {
  return (
    <>
    
    <img src={gazeboBanner} alt="" className="banner" />


    <div className='product-container'>

      {GazeboData.map((item,i) =>{
        return <ProductItem 
          key={item.i} 
          id={item.id}                   
          name={item.name} 
          image={item.image}
          description={item.description}
          price={item.price} />
      })}
      
    </div>
    </>
  )
}

export default Gazebos