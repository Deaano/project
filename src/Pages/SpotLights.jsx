import React from 'react'
import SpotLightsData from '../Assets/ProductData/SpotLightsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const SpotLights = () => {
  return (
    <>
    
    <div className='product-container'>

      {SpotLightsData.map((item,i) =>{
        return <ProductItem 
          key={item.i} 
          id={item.id}                   
          name={item.name} 
          image={item.image}
          description={item.description}
          price={item.price}
          link={item.link} />
      })}
      
    </div>
    
    </>
  )
}

export default SpotLights