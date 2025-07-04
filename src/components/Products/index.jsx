import React from 'react'
import images from '../../assets/products/watches/boAt Cosmos Pro 1.webp'
import '../Products/style.css'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <div className='productItem rounded-md overflow-hidden '>
        <div className='imgWrapper w-[100%]  overflow-hidden rounded-md'>
          <img src={images} className='w-full '/>
        </div>
        <div className='info p-3'>
          <h6 className='text-[13px]'><Link to="/" className='link transition-all' >Brand Name</Link></h6>
          <h3 className='text-[14px] title mt-2 font-[500] text-[rgba(0,0,0,0.9)]'><Link to="/" className='link  transition-all'>Firebolt F-31A Digital Watch</Link></h3>
        </div>
    </div>
  )
}

export default Products
