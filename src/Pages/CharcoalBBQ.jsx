import React from 'react'
import GasBBQData from '../Assets/ProductData/GasBBQData'
import ProductItem from '../Components/ProductItem/ProductItem'


const CharcoalBBQ = () => {
  return (
    <>
    
    <div className='product-container'>

      {GasBBQData.map((item,i) =>{
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

export default CharcoalBBQ