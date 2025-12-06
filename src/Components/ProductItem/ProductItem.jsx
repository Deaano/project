import React from 'react'
import './ProductItem.css'

const ProductItem = (props) => {
  return (
    <>
    
    <div className="item-container">
        <div className="item-name">
            <p>{props.name}</p>
        </div>
        <div className="img-container">
           <img src={props.image} alt=""/> 
        </div>
        <div className="item-description">
            <p>{props.description}</p>
        </div>
        <div className="item-price">
            <p>{props.price}</p>
        </div>
        
    </div>

    </>
  )
}

export default ProductItem