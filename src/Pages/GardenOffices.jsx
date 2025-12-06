import React from 'react'
import GardenOfficesData from '../Assets/ProductData/GardenOfficesData'
import ProductItem from '../Components/ProductItem/ProductItem'

const GardenOffices = () => {
  return (
    <>
    
    <div className='product-container'>

      {GardenOfficesData.map((item,i) =>{
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

export default GardenOffices