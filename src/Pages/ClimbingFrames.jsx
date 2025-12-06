import React from 'react'
import ClimbingFramesData from '../Assets/ProductData/ClimbingFramesData'
import ProductItem from '../Components/ProductItem/ProductItem'

const ClimbingFrames = () => {
  return (
    <>
    
    <div className='product-container'>

      {ClimbingFramesData.map((item,i) =>{
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

export default ClimbingFrames