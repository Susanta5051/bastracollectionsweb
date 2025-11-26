import React, { useContext } from 'react'
import { useState } from 'react';
import {assets} from '../assets/assets';
import {Link, NavLink } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa";
import {ShopContext} from '../context/ShopContext';
import { toast } from 'react-toastify';

const Navbar = () => {

    const [visible , setVisible] = useState(false);
    const {showSearch,setShowSearch , getCartCount ,navigate ,token ,setToken , setCartItems}=useContext(ShopContext);

    const Logout = ()=>{
      navigate('/')
      toast.success('Logout Successfully')
      localStorage.removeItem('token');
      setToken('') 
      setCartItems({});
      
    }

  return (
    <div className='flex item-center justify-between py-6 font-medium '>
      <img src={assets.logo} alt='mainlogo' className='w-36 '></img>

      <ul className='hidden sm:flex gap-5 text-sm text-grey-500'>
        <NavLink to='/' className={({isActive})=> isActive ? ' underline underline-offset-4' : ''}>Home <hr className='hidden'></hr></NavLink>

        <NavLink to='/collections' className={({isActive})=> isActive ? 'underline underline-offset-4' : ''}>Collections <hr className='hidden'></hr></NavLink>

        <NavLink to='/about' className={({isActive})=> isActive ? 'underline underline-offset-4' : ''}>About <hr className='hidden'></hr></NavLink>
        
        <NavLink to='/contact' className={({isActive})=> isActive ? 'underline underline-offset-4' : ''}>Contact <hr className='hidden'></hr></NavLink>

      </ul>

      <div className='flex item-center gap-6'>
        <img src={assets.search_icon}  className='cursor-pointer w-5 h-5 ' alt="searsclogo" onClick={()=>(setShowSearch(!showSearch))} />
        <div className='group relative'>
           <img src={assets.profile_icon} onClick={()=>(token ? null : navigate('/login'))} alt="" className='w-5 cursor-pointer ' />

           {/* dropdown */}
            {token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black' onClick={()=>navigate('/orders')}>Orders</p>
                    <p className='cursor-pointer hover:text-black' onClick={()=>Logout()}>Logout</p>                     
                </div>
            </div>}
        </div>
        <div onClick={()=>{!token ? toast.error('Please LogIn To See Your Cart') : navigate('/cart')}} className="relative">
            <img src={assets.cart_icon} alt="cartlogo" className='w-5 cursor-pointer' />
            <p className='absolute right-[-5px] bottom-3 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()           
            }</p>
        </div>
        <img  src={assets.menu_icon} alt="dropdown" onClick={()=>{setVisible(true)}} className='w-5 h-5 cursor-pointer sm:hidden '></img>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all z-50 ${visible ? 'w-full ': 'w-0' }`}>
            <div className='flex text-grey-900 flex-col'>
                 <div className='flex item-center gap-4 p-3 cursor-pointer ' onClick={()=>{setVisible(false)}}>
                        
                        <FaGreaterThan className='mt-1 rotate-180'/><p className='mt-0'>Back</p>
                 </div>
                    <ul className='flex flex-col text-lg mt-2'>
                        <NavLink to='/' onClick={()=>{setVisible(false)}} className={ ` py-2 pl-6 border  ${ ({isActive})=> isActive ? 'text-black' : ''}`}>Home </NavLink>
                        
                        <NavLink to='/collections' onClick={()=>{setVisible(false)}} className={ ` py-2 pl-6 border  ${ ({isActive})=> isActive ? 'text-black' : ''}`}>Collections </NavLink>
                        
                        <NavLink to='/about' onClick={()=>{setVisible(false)}} className={ ` py-2 pl-6 border  ${ ({isActive})=> isActive ? 'text-black' : ''}`}>About </NavLink>
                      
                        <NavLink to='/contact' onClick={()=>{setVisible(false)}} className={ ` py-2 pl-6 border  ${ ({isActive})=> isActive ? 'text-black' : ''}`}>Contact</NavLink>
    
                    </ul>
            </div>
      </div>
    </div>
  )
}

export default Navbar
