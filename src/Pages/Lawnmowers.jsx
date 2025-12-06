import React from 'react'
import LawnmowerData from '../Assets/ProductData/LawnmowerData'
import ProductItem from '../Components/ProductItem/ProductItem'

const Lawnmowers = () => {
  return (
    <>
    
    <div className='product-container'>

      {LawnmowerData.map((item,i) =>{
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

export default Lawnmowers