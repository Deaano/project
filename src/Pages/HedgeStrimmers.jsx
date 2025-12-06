import React from 'react'
import HedgeStrimmersData from '../Assets/ProductData/HedgeStrimmersData'
import ProductItem from '../Components/ProductItem/ProductItem'

const HedgeStrimmers = () => {
  return (
    <>
    
    <div className='product-container'>

      {HedgeStrimmersData.map((item,i) =>{
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

export default HedgeStrimmers