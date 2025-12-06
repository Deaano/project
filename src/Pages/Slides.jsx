import React from 'react'
import SlidesData from '../Assets/ProductData/SlidesData'
import ProductItem from '../Components/ProductItem/ProductItem'

const Slides = () => {
  return (
    <>
    
    <div className='product-container'>

      {SlidesData.map((item,i) =>{
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

export default Slides