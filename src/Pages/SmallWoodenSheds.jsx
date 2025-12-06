import React from 'react'
import SmallWoodenShedsData from '../Assets/ProductData/SmallWoodenShedsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const SmallWoodenSheds = () => {
  return (
    <>
    
    <div className='product-container'>

      {SmallWoodenShedsData.map((item,i) =>{
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

export default SmallWoodenSheds