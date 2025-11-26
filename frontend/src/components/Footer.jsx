import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm '>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-grey-600'>Get the latest updates, special offers, and insightful content delivered directly to your inbox. We respect your privacy and will never share your email.</p>
        </div>

        <div >
            <p className='text-xl font-medium mb-5' >COMPANY</p>
            <ul className='flex flex-col gap-2 text-grey-700'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div >
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-grey-700'>
                <li>+91-8117055730</li>
                <li>dassushant580@gmail.com</li>
            </ul>
        </div>
      </div>
      <div className='mb-50'>
        <hr></hr>
        <p className='py-5 text-sm text-center'>copyright 2024@susanta.com-All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
