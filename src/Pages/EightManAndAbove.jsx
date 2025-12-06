import React from 'react'
import EightManAndAboveData from '../Assets/ProductData/EightManAndAboveData'
import ProductItem from '../Components/ProductItem/ProductItem'

const EightManAndAbove = () => {
  return (
    <>
    
    <div className='product-container'>

      {EightManAndAboveData.map((item,i) =>{
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

export default EightManAndAbove