import React from 'react'
import MustSeeData from '../Assets/ProductData/MustSeeData'
import ProductItem from '../Components/ProductItem/ProductItem'
import '../Pages/GlobalCSS/Product.css'

const MustSee = () => {
  return (
    <div className='product-container'>

      {MustSeeData.map((item,i) =>{
        return <ProductItem 
          key={item.i} 
          id={item.id}                   
          name={item.name} 
          image={item.image}
          description={item.description}
          price={item.price} />
      })}
      
    </div>
  )
}

export default MustSee