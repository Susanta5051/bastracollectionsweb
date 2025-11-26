import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div className='flex flex-col  mb-10 sm:flex-row justify-around text-center gap-12 sm:gap-2 text-xs text-justify-center sm:text-sm md:text-base text-grey-700'>
      <div>
        <img src={assets.exchange_icon } className='w-12  m-auto mb-5'></img>
        <p className='font-semibold text-center'>Easy Exchange Policy</p>
        <p className='text-grey-700'>We offer hastle free exchange policy </p>
      </div>

      <div>
        <img src={assets.quality_icon } className='w-12 m-auto mb-5'></img>
        <p className='font-semibold'>7 Day Return </p>
        <p className='text-grey-700'>We offer 7 day return policy </p>
      </div>

      <div>
        <img src={assets.support_img } className='w-12 m-auto mb-5'></img>
        <p className='font-semibold'>Customer Support</p>
        <p className='text-grey-700'>We offer 24/7 customer support </p>
      </div>

    </div>
  )
}

export default Policy
