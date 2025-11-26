import {React} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Collections from './pages/Collections.jsx';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Product from './pages/Product.jsx';
import Orders from './pages/Orders';  
import PlaceOrder from './pages/PlaceOrder';
import Cart from './pages/Cart';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
  import { ToastContainer, toast } from 'react-toastify';


 const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/collections' element={<Collections/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/place-order' element={<PlaceOrder/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/login' element={<Login/>} />
 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;