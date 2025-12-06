import React from 'react'
import CharcoalBBQData from '../Assets/ProductData/CharcoalBBQData'
import ProductItem from '../Components/ProductItem/ProductItem'

const GasBBQ = () => {
  return (
    <>
    
    <div className='product-container'>

      {CharcoalBBQData.map((item,i) =>{
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

export default GasBBQ