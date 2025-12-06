import React from 'react'
import BBQUtensilsData from '../Assets/ProductData/BBQUtensilsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const UtensilsAndEquipment = () => {
  return (
    <>
    
    <div className='product-container'>

      {BBQUtensilsData.map((item,i) =>{
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

export default UtensilsAndEquipment