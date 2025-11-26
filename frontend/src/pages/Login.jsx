import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useEffect } from 'react';
import axios from "axios";
import { toast } from "react-toastify";



const Login = () => {

  const [currentState,setCurrentState]=useState('Login');
  const {token , setToken , navigate ,backendUrl } = useContext(ShopContext);
  const [name , setName ] =useState('');
  const [email , setEmail ] =useState('');
  const [password , setPassword ] =useState('');
  const [disable,setDisable]=useState(false);

  const onSubmitHandler=async(event)=>{
    event.preventDefault();
    setDisable(true);
    try{ 
      if(currentState === 'Sign Up'){
        const responce = await axios.post(backendUrl + '/api/user/register', {name,email,password})
        if(responce.data.success ){
          setToken (responce.data.token);
          localStorage.setItem('token' , responce.data.token);
          toast.success('User Registered Successfully')
        }else{
          toast.error(responce.data.message)
        }
      }else{
        const responce = await axios.post(backendUrl + '/api/user/login', {email,password})
          if(responce.data.success ){
            setToken (responce.data.token);
            localStorage.setItem('token' , responce.data.token);
            toast.success('Logged In Successfully')
          }else{
            toast.error(responce.data.message)
          }
      }

    }
    catch(error){
      console.log(error);
      toast.error(error.message);
    }
    setDisable(false);
  }

  useEffect(()=>{
    if(token ){
      navigate('/');
    }
  },[token])

  return (
    <form  onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='flex flex-col items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        {currentState==='Login'?"": <input type="text" className='w-full px-3 py-2 border border-gray-800' onChange={(e)=>setName(e.target.value)} value={name} placeholder='Name' />}
        <input type="email" className='w-full px-3 py-2 border border-gray-800' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email' />
        <input type="password" className='w-full px-3 py-2 border border-gray-800' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password' />
        <div className='w-full flex justify-between text-sm -mt-2'>
          <p className='cursor-pointer'> Forgot Your Password?</p>
          {
            currentState=='Login'?
            <p className='cursor-pointer' onClick={()=>setCurrentState('Sign Up')}>Create an Account</p>:
            <p className='cursor-pointer' onClick={()=>setCurrentState('Login')}>Log In Here</p>
          }
        </div>
        {
          disable ?
          <button  className='bg-black text-white font-light px-8 py-2 mt-4'>Pending</button> :
          <button  type='submit' className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login'?'Sign In':'Sign Up'}</button>
        }
        
        
    </form>
  )
}

export default Login
