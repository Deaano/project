import React from 'react'
import SwingingChairData from '../Assets/ProductData/SwingingChairData'
import ProductItem from '../Components/ProductItem/ProductItem'

const SwingingChairs = () => {
  return (
    <>
    
    
    <div className='product-container'>

      {SwingingChairData.map((item,i) =>{
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

export default SwingingChairs