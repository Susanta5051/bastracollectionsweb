import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'> 
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-800'> Our Store</p>
          <p className='text-gray-700'> Saheed Nagar, Bhubaneswar <br/> Odisha , India</p>
          <p className='text-gray-700'>Phone: +91-8117055730 <br/> Email: dassushant580.com</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
