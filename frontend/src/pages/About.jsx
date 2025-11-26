import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"About"} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px] ' alt=''/>
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
            <p>Welcome to Bastra ! <br/> Our journey started with a simple belief: that quality products and exceptional customer experience should always go hand-in-hand. We are a passionate team dedicated to curating stylish outfits. Every item in our collection is  custom-made with  a focus on durability, ethical sourcing, and unique design, ensuring you receive something truly special.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to simplify your life, inspire creativity, make high-quality products accessible to everyone. We strive to build a community around by not only offering great products but also by championing eco-friendly packaging, supporting local artisans, or donating a portion of profits to a relevant cause. We believe in transparency, integrity, and always putting our customer first.</p>
         </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b> Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously vet every supplier and product to ensure it meets our rigorous standards for material, craftsmanship, and performance. We don't just sell products—we guarantee durability and satisfaction.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b> Convenience:</b>
          <p className='text-gray-600'>From our user-friendly website to our fast, reliable shipping, we've designed every step of your purchase to be effortless. Enjoy easy navigation, clear product details, and hassle-free returns, making your next purchase simple and enjoyable.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b> Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated support team is here for you. Whether you have a question about a product, need help tracking an order, or just want advice, we're committed to providing prompt, personalized assistance. Your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
