import React from 'react'
import LeafBlowersData from '../Assets/ProductData/LeafBlowersData'
import ProductItem from '../Components/ProductItem/ProductItem'

const LeafBlowers = () => {
  return (
    <>
    
    <div className='product-container'>

      {LeafBlowersData.map((item,i) =>{
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

export default LeafBlowers