import React from 'react'
import AutomatedLawnmowersData from '../Assets/ProductData/AutomatedLawnmowersData'
import ProductItem from '../Components/ProductItem/ProductItem'

const AutomatedLawnmowers = () => {
  return (
    <>
    
    <div className='product-container'>

      {AutomatedLawnmowersData.map((item,i) =>{
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

export default AutomatedLawnmowers