import React from 'react'
import TenTwelveFtTrampolinesData from '../Assets/ProductData/TenTwelveFtTrampolinesData'
import ProductItem from '../Components/ProductItem/ProductItem'

const TenTwelveFtTrampolines = () => {
  return (
    <>
    
      <div className='product-container'>

      {TenTwelveFtTrampolinesData.map((item,i) =>{
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

export default TenTwelveFtTrampolines