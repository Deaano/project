import React from 'react'
import EggChairData from '../Assets/ProductData/EggChairData'
import ProductItem from '../Components/ProductItem/ProductItem'

const EggChairs = () => {
  return (
    <>
    
    <div className='product-container'>

      {EggChairData.map((item,i) =>{
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

export default EggChairs