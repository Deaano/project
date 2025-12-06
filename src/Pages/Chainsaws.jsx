import React from 'react'
import ChainsawsData from '../Assets/ProductData/ChainsawsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const Chainsaws = () => {
  return (
    <>
    
    <div className='product-container'>

      {ChainsawsData.map((item,i) =>{
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

export default Chainsaws