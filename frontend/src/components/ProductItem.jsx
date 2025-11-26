import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react'

const ProductItem = ( {id,image,name,price}) => {
    const  {currency} = useContext(ShopContext);
   
  return (
    <div>
        <Link className='text-grey-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img src={image[0]} alt='name' className='hover:scale-110 transition ease-in-out' />  
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency} {price}.00</p>
        </Link>
      
    </div>
  )
}

export default ProductItem
