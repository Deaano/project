import React from 'react'
import PoolsForPetsData from '../Assets/ProductData/PoolsForPetsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const PoolsForPets = () => {
  return (
    <>
    
    <div className='product-container'>

      {PoolsForPetsData.map((item,i) =>{
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

export default PoolsForPets