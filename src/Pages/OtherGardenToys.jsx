import React from 'react'
import OtherGardenToysData from '../Assets/ProductData/OtherGardenToysData'
import ProductItem from '../Components/ProductItem/ProductItem'

const OtherGardenToys = () => {
  return (
    <>
    
    <div className='product-container'>

      {OtherGardenToysData.map((item,i) =>{
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

export default OtherGardenToys