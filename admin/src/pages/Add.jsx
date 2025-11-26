import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1 , setImage1]=useState(false);
  const [image2 , setImage2]=useState(false);
  const [image3 , setImage3]=useState(false);
  const [image4 , setImage4]=useState(false);

  const [name ,setName] = useState('');
  const [description,setDescription] = useState('');
  const [category , setCategory] =useState('Men');
  const [subCategory , setSubCategory] =useState('Topwear');
  const [price,setPrice] = useState('');
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes,setSizes]= useState([]);
  const [disable ,setDisable] = useState(false);

  const submitHandler =async (e)=>{
    e.preventDefault();
    setDisable(true);
    try {
      if(!(image1 || image2 || image3 || image4)){
        toast.error('Please select atleast one image');
        return;
      }
      if(sizes.length == 0){
        toast.error('Please select atleast one size');
        return;
      }
      const formData = new FormData();

      formData.append("name" , name);
      formData.append("description",description);
      formData.append("category",category);
      formData.append("subCategory",subCategory);
      formData.append("price",price);
      formData.append("bestSeller",bestSeller);
      formData.append("sizes",JSON.stringify(sizes));

      if(!(image1 || image2 || image3 || image4)){
        toast.error('Atleast One Image required');
        return;
      }

      image1 && formData.append("image1",image1);
      image2 && formData.append("image2",image2);
      image3 && formData.append("image3",image3);
      image4 && formData.append("image4",image4);
      const responce = await axios.post(backendUrl+'/api/product/add' , formData , {headers : {token}}); 
      if(responce.data.success){
        toast.success(responce.data.message);
        setName('');
        setDescription('');
        setSizes([]);
        setImage1('');
        setImage2('');
        setImage3('');
        setImage4('');
        setBestSeller(false);
      }else{
        toast.error(responce.data.message);
      }

    }catch(error){
      console.log(error);
      toast.error(error.message);
    }
    setDisable(false);
  }



  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full items-start gap-3'>
      <div >
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1?assets.upload_area:URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file"  id='image1' hidden/>
          </label>

          <label htmlFor="image2">
            <img className='w-20' src={!image2?assets.upload_area:URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file"  id='image2' hidden/>
          </label>

          <label htmlFor="image3">
            <img className='w-20'  src={!image3?assets.upload_area:URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file"  id='image3' hidden/>
          </label>

          <label htmlFor="image4">
            <img className='w-20'  src={!image4?assets.upload_area:URL.createObjectURL(image4)}alt="" />
            <input  onChange={(e)=>setImage4(e.target.files[0])} type="file"  id='image4' hidden/>
          </label>
        </div>

        <div>
          <p>Product Name</p>
          <input type="text" placeholder='Type here' onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 ' required />
        </div>

        <div>
          <p>Description</p>
          <textarea type="text" placeholder='Content here' onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 ' required />
        </div>

       <div className='flex flex-col sm:flex-row  gap-2 w-full sm:gap-8'>
         <div className=' '>
          <p className='mb-2 '>Product category</p>
          <select className='w-full  px-3 py-2' onChange={(e)=>setCategory(e.target.value)} >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Sub category</p>
          <select className='w-full  px-3 py-2' onChange={(e)=>setSubCategory(e.target.value)} >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className=' w-1/3 sm:w-[120px]' >
          <p className='mb-2'>Product Price</p>
          <input type="Number" min={0} onChange={(e)=>setPrice(e.target.value)} className='w-full  px-3 py-2' />
        </div>
       </div>

       <div>
        <p className='mb-2'>Sizes</p>
        <div className='flex gap-3'>
          <div onClick={()=>setSizes(sizes.includes('S')? sizes.filter(item => item != 'S'): [...sizes,'S'])}><p className={` px-3 py-1 cursor-pointer ${sizes.includes('S') ? 'bg-gray-700 text-white' :'bg-slate-200'}`}  >S</p></div>
          <div onClick={()=>setSizes(sizes.includes('M')? sizes.filter(item => item != 'M'): [...sizes,'M'])}><p className={` px-3 py-1 cursor-pointer ${sizes.includes('M') ? 'bg-gray-700 text-white' :'bg-slate-200'}`}  >M</p></div>
          <div onClick={()=>setSizes(sizes.includes('L')? sizes.filter(item => item != 'L'): [...sizes,'L'])}><p className={` px-3 py-1 cursor-pointer ${sizes.includes('L') ? 'bg-gray-700 text-white' :'bg-slate-200'}`}  >L</p></div>
          <div onClick={()=>setSizes(sizes.includes('XL')? sizes.filter(item => item != 'XL'): [...sizes,'XL'])} ><p className={` px-3 py-1 cursor-pointer ${sizes.includes('XL') ? 'bg-gray-700 text-white' :'bg-slate-200'}`} >XL</p></div>
          <div onClick={()=>setSizes(sizes.includes('XXL')? sizes.filter(item => item != 'XXL'): [...sizes,'XXL'])}><p className={` px-3 py-1 cursor-pointer ${sizes.includes('XXL') ? 'bg-gray-700 text-white' :'bg-slate-200'}`} >XXL</p></div>
        </div>
       </div>

       <div className='mt-3 flex gap-2'>
        <input onChange={()=>setBestSeller(!bestSeller)} checked={bestSeller} type="checkbox" name="" id="bestseller" />
        <label className='cursor-pointer' htmlFor="bestseller">Add to BestSeller</label>
       </div>
       <button className='w-28 py-3 mt-4 bg-black text-white' disabled={disable} >{ disable ?'Adding' :'Add' }</button>
      </div>
    </form>
  )
}

export default Add
