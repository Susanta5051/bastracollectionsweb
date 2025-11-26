import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';  
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} =useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState("");
  const [sized,setSized]=useState(null);


  const fetchProductData=async ()=>{
    products.map((item)=>{
      if(productId == item._id){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }


  useEffect(()=>{
    fetchProductData();
  },[productId]);

  useEffect(() => {
    window.scrollTo(0,1);
}, [productId]);
  return ( productData ?
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* productdata */}
        <div className='flex gap-12 flex-col sm:flex-row '>

          {/* ProductImages */}
          <div className='flex-1 flex flex-col-reverse gap-3 h-[10%] sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.7%]'>
              {
              productData.image.map((img,index)=>(
                <img key={index} src={img} alt={productData.name} onClick={()=>(setImage(img))} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer'/>
              ))
              }
            </div>

              <div className='w-full flex items-start justify-center sm:w-[80%]'>
                <img src={image} className='w-full h-auto' alt=""></img>
              </div>
          </div>

          <div className='flex-1 text-gray-700'>
            <div className='font-medium text-2xl mt-2'>{ productData.name}</div>
            <div className="flex items-center gap-3 mt-3">
              <img src={assets.star_icon} alt="" className='w-3 5'/> 
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_dull_icon} alt="" className='w-3 5'/>
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}.00</p>
            <p className='mt-5 text-gray-500 md:4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {
                  productData.sizes.map((size,index)=>(
                    <button key={index} onClick={()=>(setSized(size))} className={`border border-black w-10 h-10 flex items-center justify-center cursor-pointer  transition-all ${(size==sized) ? "bg-black text-white":' ' }`}>{size}</button>
                  ))
                }
              </div>
            </div>
            <button className='bg-black text-white py-4 rounded-full px-8 active:opacity-70 transition-opacity' onClick={()=>(addToCart(productId,sized))}>Add to Cart</button>
            <hr className='mt-8 sm:w-4/5'></hr>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p>Cash on Delivery Available</p>
              <p>Easy Return & Exchange Policy Within 7 Days</p>
            </div>
          </div>
        </div>

        {/* Description and reviews */}
        <div className='mt-16'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'> Description</b>
            <p className='border px-5 py-3 text-sm'>Reviews</p>
          </div>
            
          <div className='border p-5 text-gray-500 flex flex-col gap-3 text-sm'> 
                <p>An e-commerce website is a online platform that faciliates buying and selling products or services over the internet. It services as a virtual market place where businesses and individuals can showcase their products , interact with customers and conduct transactions without need for a physical presence. E-commerce websites have gained immence popularity due to their convinience, accesibility, and global reach they offer.</p>
                <p>E-commerce website typically display products and services along with detailed descriptions, images, prices, and available(e.g sezes,colors). Each products usually has its own dediates page with relevant information.</p>
          </div>

          {/* display related products */}
          <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

        </div>
    </div>
    :null
  )
}

export default Product
