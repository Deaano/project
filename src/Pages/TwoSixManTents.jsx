import React from 'react'
import TwoSixManTentsData from '../Assets/ProductData/TwoSixManTentsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const TwoSixManTents = () => {
  return (
    <>
    
    <div className='product-container'>

      {TwoSixManTentsData.map((item,i) =>{
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

export default TwoSixManTents