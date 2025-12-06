import React from 'react'
import SwimmingPoolsData from '../Assets/ProductData/SwimmingPoolsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const SwimmingPool = () => {
  return (
    <>
    
    <div className='product-container'>

      {SwimmingPoolsData.map((item,i) =>{
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

export default SwimmingPool