import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-grey-800'>Subscribe Now And Get 20% Off</p>
        <p className='text-grey-400 mt-3'>Join our community and be the first to know about new collection launches, limited-time sales, and styling tips from our experts. Enter your email below to instantly receive your 20% Off discount code!</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" className='w-full sm:flex-1 outline-none'name="email" placeholder='Enter Your Email' />
            <button  type="submit"className='bg-black text-white px-10 py-4 text-xs'>Subscribe Now</button>
        </form>
    </div>
  )
}

export default NewsletterBox
