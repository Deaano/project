import React from 'react'
import GeneralToolsData from '../Assets/ProductData/GeneralToolsData'
import ProductItem from '../Components/ProductItem/ProductItem'

const GeneralTools = () => {
  return (
    <>
    
    <div className='product-container'>

      {GeneralToolsData.map((item,i) =>{
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

export default GeneralTools