import React from 'react'
import CampingEquipmentData from '../Assets/ProductData/CampingEquipmentData'
import ProductItem from '../Components/ProductItem/ProductItem'

const CampingEquipment = () => {
  return (
    <>
    
    <div className='product-container'>

      {CampingEquipmentData.map((item,i) =>{
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

export default CampingEquipment