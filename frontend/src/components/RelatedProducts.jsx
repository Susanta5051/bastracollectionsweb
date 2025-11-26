import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({category,subCategory}) => {
    const {products } =useContext(ShopContext);
    const [related,setRelated] = useState([]);
    useEffect(()=>{
        let filtered = products.filter((item)=>(item.category === category && item.subCategory === subCategory));
        filtered =filtered.slice(0,5);
        setRelated(filtered);
    },[products,category,subCategory]);


    return (
    <div className='my-10'>  
        <div className='text-center text-3xl py-2'>
            <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10'> 
            {
                related.map((item,index)=>(
                    <ProductItem  key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProducts
