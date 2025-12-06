import React from 'react'
import StandingLampsData from '../Assets/ProductData/StandingLampsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const StandingLamps = () => {
  return (
    <>
    
    <div className='product-container'>

      {StandingLampsData.map((item,i) =>{
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

export default StandingLamps