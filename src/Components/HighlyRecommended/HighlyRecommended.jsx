import React from 'react'
import './HighlyRecommended.css'
import highlyRecommendedData from '../../Assets/ProductData/highlyRecommendedData'
import ProductItem from '../ProductItem/ProductItem'

const HighlyRecommended = () => {
  return (
    <>
      <div className="highly-recommended-title-container">
        <h2 className="highly-recommended-title">Highly Recommended By Us</h2>
        <hr/>
</div>

      <div className="highly-recommended-product-container">
                  {highlyRecommendedData.map((item,i)=>{
                    return <ProductItem 
                            key={item.i} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image}
                            description={item.description}
                            price={item.price} />
                  })}
              </div>

    </>
  )
}

export default HighlyRecommended