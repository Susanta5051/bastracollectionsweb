import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route,Routes } from 'react-router-dom'
import Add from '../src/pages/Add.jsx'
import Orders from '../src/pages/Orders.jsx'
import List from '../src/pages/List.jsx'
import { useState } from 'react'
import Login from './components/Login.jsx'
import Welcome from './pages/Welcome.jsx'
import {ToastContainer} from 'react-toastify'

export const backendUrl= import.meta.env.VITE_BACKEND_URL;
export const currency='\u20B9';

const App = () => {

  
  const [token , setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=>{
    localStorage.setItem('token',token);
  },[token]);

  return (
    
    <div className='bg-gray-50 max-h-screen'>
      <ToastContainer />
      {token =='' ? 
      <Login setToken={setToken}/> :
     
      <>
        <Navbar setToken={setToken} />
        <hr/>
        <div className='flex w-full'>
          <Sidebar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base '>
            <Routes>
              <Route element={<Welcome token={token} />} path='/' />
              <Route element={<Add token={token} />} path='/add' />
              <Route element={<Orders token={token} />} path='/orders' />
              <Route element={<List  token={token} />} path='/list' />

            </Routes>
          </div>
        </div>
        
      </>
    }
    </div>
  )
}

export default App
