import React from 'react'
import WallLightsData from '../Assets/ProductData/WallLightsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const WallLights = () => {
  return (
    <>
    
    <div className='product-container'>

      {WallLightsData.map((item,i) =>{
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

export default WallLights