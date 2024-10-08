import React from 'react'
import './ExploreProduct.css'
import { product_list } from '../../assets/assets'

const ExploreProduct = ({category,setCategory}) => {
  return (
    <div className='explore-product' id='explore-product' >
        <h1>
            Explore our product
        </h1>
        <p className='explore-product-text'>Discover our wide range of products, designed to meet all your needs and preferences. Browse through our collection and find the perfect products to enhance your lifestyle.</p>
        <div className="explore-product-list">
            {product_list.map((item, index)=>{
                return(
                    <div  onClick={()=>setCategory(prev=>prev===item.product_name?"All":item.product_name) } key={index} className='explore-product-list-item'>
                        <img src={item.product_image} alt='' width={70} height={70}/>
                        <p>{item.product_name}</p>

                        </div>
                )
            })}
        </div>
        <hr/>
      
    </div>
  )
}

export default ExploreProduct
