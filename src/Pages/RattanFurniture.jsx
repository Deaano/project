import React from 'react'
import RattanFurnitureData from '../Assets/ProductData/RattanFurnitureData'
import ProductItem from '../Components/ProductItem/ProductItem'

const RattanFurniture = () => {
  return (
    <>
    
    <div className='product-container'>

      {RattanFurnitureData.map((item,i) =>{
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

export default RattanFurniture