import React from 'react'
import LargeWoodenShedsData from '../Assets/ProductData/LargeWoodenShedsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const LargeWoodenSheds = () => {
  return (
    <>
    
    <div className='product-container'>

      {LargeWoodenShedsData.map((item,i) =>{
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

export default LargeWoodenSheds