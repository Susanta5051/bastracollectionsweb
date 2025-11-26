import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';    
import ProductItem from './ProductItem';


const LatestCollections = () => {

    const  { products } = useContext(ShopContext);

    const [latestProducts,setLatestProducts]=useState([]);
  
    useEffect(()=>{
        const latest = products.slice(-10).reverse(); 
        setLatestProducts(latest);
    },[products])

  return (
    <div className='my-10'>
        <div className='py-8 text-center text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-1/1 px-10  text-justify-center text-xs sm:text-sm md:text-base text-grey-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore placeat eos voluptates nulla a saepe rerum nemo dolorum magnam. Suscipit laudantium alias enim, dolore a accusamus perspiciatis soluta. Aspernatur!</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
          {latestProducts.map(( product, index)=>(
              <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price}/>
          ))}
        </div>
      
    </div>
  )
}

export default LatestCollections
