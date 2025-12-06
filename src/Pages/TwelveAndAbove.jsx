import React from 'react'
import TwelveAndAboveTrampolinesData from '../Assets/ProductData/TwelveAndAboveTrampolines'
import ProductItem from '../Components/ProductItem/ProductItem'

const TwelveAndAbove = () => {
  return (
    <>
    
      <div className='product-container'>

      {TwelveAndAboveTrampolinesData.map((item,i) =>{
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

export default TwelveAndAbove