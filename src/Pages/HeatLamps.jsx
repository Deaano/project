import React from 'react'
import HeatLampsData from '../Assets/ProductData/HeatLampsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const HeatLamps = () => {
  return (
    <>
    
    <div className='product-container'>

      {HeatLampsData.map((item,i) =>{
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

export default HeatLamps