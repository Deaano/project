import React from 'react'
import HotTubsData from '../Assets/ProductData/HotTubsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const HotTubs = () => {
  return (
    <>
    
    <div className='product-container'>

      {HotTubsData.map((item,i) =>{
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

export default HotTubs