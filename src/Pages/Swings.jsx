import React from 'react'
import SwingsData from '../Assets/ProductData/SwingsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const Swings = () => {
  return (
    <>
    
    <div className='product-container'>

      {SwingsData.map((item,i) =>{
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

export default Swings