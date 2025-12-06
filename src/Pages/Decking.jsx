import React from 'react'
import DeckingData from '../Assets/ProductData/DeckingData'
import ProductItem from '../Components/ProductItem/ProductItem'

const Decking = () => {
  return (
    <>
    
    <div className='product-container'>

      {DeckingData.map((item,i) =>{
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

export default Decking