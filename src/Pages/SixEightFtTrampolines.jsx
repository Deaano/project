import React from 'react'
import SixEightFtTrampolinesData from '../Assets/ProductData/SixEightFtTrampolinesData'
import ProductItem from '../Components/ProductItem/ProductItem'

const SixEightFtTrampolines = () => {
  return (
    <>
    
      <div className='product-container'>

      {SixEightFtTrampolinesData.map((item,i) =>{
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

export default SixEightFtTrampolines