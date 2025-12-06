import React from 'react'
import IndoorTrampolinesData from '../Assets/ProductData/IndoorTrampolinesData'
import ProductItem from '../Components/ProductItem/ProductItem'

const IndoorTrampolines = () => {
  return (
    <>
    
      <div className='product-container'>

      {IndoorTrampolinesData.map((item,i) =>{
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

export default IndoorTrampolines