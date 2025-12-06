import React from 'react'
import StrimmersData from '../Assets/ProductData/StrimmersData'
import ProductItem from '../Components/ProductItem/ProductItem'

const Strimmers = () => {
  return (
    <>
    
    <div className='product-container'>

      {StrimmersData.map((item,i) =>{
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

export default Strimmers