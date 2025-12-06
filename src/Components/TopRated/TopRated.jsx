import React from 'react'
import './TopRated.css'
import topRatedData from '../../Assets/ProductData/topRatedData'
import ProductItem from '../ProductItem/ProductItem'


const TopRated = (props) => {
  return (
    <>
        <div className="title-container">
        <h2 className="top-rated-title">Top Rated By Us</h2>
        <hr/>
</div>
        <div className="top-rated-product-container">
            {topRatedData.map((item,i)=>{
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

export default TopRated