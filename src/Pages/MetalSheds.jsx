import React from 'react'
import MetalShedsData from '../Assets/ProductData/MetalShedsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const MetalSheds = () => {
  return (
    <>
    
    <div className='product-container'>

      {MetalShedsData.map((item,i) =>{
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

export default MetalSheds