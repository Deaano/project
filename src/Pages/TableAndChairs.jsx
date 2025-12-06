import React from 'react'
import TableAndChairData from '../Assets/ProductData/TableAndChairData'
import ProductItem from '../Components/ProductItem/ProductItem'

const TableAndChairs = () => {
  return (
    <>
    
    <div className='product-container'>

      {TableAndChairData.map((item,i) =>{
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

export default TableAndChairs