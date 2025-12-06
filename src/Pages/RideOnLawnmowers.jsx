import React from 'react'
import RideOnLawnmowerData from '../Assets/ProductData/RideOnLawnmowerData'
import ProductItem from '../Components/ProductItem/ProductItem'

const RideOnLawnmowers = () => {
  return (
    <>
   
    
    <div className='product-container'>

      {RideOnLawnmowerData.map((item,i) =>{
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

export default RideOnLawnmowers