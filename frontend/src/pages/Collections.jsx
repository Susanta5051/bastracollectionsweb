import React, { use, useContext ,useEffect,useState } from 'react'
import {ShopContext} from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collections = () => {

  const {products,search , showSearch }=useContext(ShopContext);
  const [showFilter ,setShowFilter]=useState(false);
  const [filteredProducts ,setFilteredProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState("Default");

  
  const toggleCategory=(categoryName)=>{
    if(category.includes(categoryName)){
      setCategory(category.filter((cat)=>cat !== categoryName));
    }else{
      setCategory([...category,categoryName]);
    }
  }

  const toggleSubCategory=(subCategoryName)=>{
    if(subCategory.includes(subCategoryName)){
      setSubCategory(subCategory.filter((cat)=>cat !== subCategoryName));
    }else{
      setSubCategory([...subCategory,subCategoryName]);
    }

  }

  const applyFilters=()=>{
    let productsCopy = [...products];


    if(showSearch && search){
      productsCopy = productsCopy.filter((product)=>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if(category.length > 0){
      productsCopy = productsCopy.filter((product)=> category.includes(product.category));
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter((product)=> subCategory.includes(product.subCategory));
    }

     if(sortType === "priceLowToHigh"){
      productsCopy.sort((a,b)=> a.price - b.price);
    }else if(sortType === "priceHighToLow"){
      productsCopy.sort((a,b)=> b.price - a.price);
    }else if(sortType === "newestFirst"){
      productsCopy.sort((a,b)=> b.id - a.id); // assuming higher id means newer product
    }

    setFilteredProducts(productsCopy);
  }

  
  

  useEffect(()=>{
    setFilteredProducts(products);
  },[products]);

  useEffect(()=>{
    applyFilters();
  }, [category,subCategory,sortType,search,showSearch]);



  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* filter products based on category */}
      <div className='min-w-60 '>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={()=>(setShowFilter(!showFilter))}>Filters</p>
        {/* categories filter */}
        <div className={`border border-grey-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block `}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-grey-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={"men"} id='men' onChange={()=>(toggleCategory("Men"))}/> <label htmlFor="men">Men</label>
              </p>

              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={"women"} id='women' onChange={()=>(toggleCategory("Women"))}/><label htmlFor='women'> Women</label>
              </p>

              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={"kids"} id='kids' onChange={()=>(toggleCategory("Kids"))} /><label htmlFor='kids'> Kids</label>
              </p>
            </div>
        </div>
        

        {/* Subcategory Filter   */}
        <div className={`border border-grey-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden '} sm:block`}>
            <p className='mb-3 text-sm font-medium '>TYPES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-grey-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={"topwear"} id='topwear' onChange={()=>(toggleSubCategory("Topwear"))}/>
                <label htmlFor="topwear">Topwear</label>
              </p>

              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={"bottomwear"} id='bottomwears' onChange={()=>(toggleSubCategory("Bottomwear"))}/>
                <label htmlFor="bottomwears">Bottomwear</label>
              </p>

              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={"winterwear"} id='winterwears' onChange={()=>(toggleSubCategory("Winterwear"))}/>
                <label htmlFor="winterwears">Winterwear</label>
              </p>
            </div>
        </div>
      </div>

      {/* products grid */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border border-gra y-300 px-3 py-2 sm:h-10 outline-none text-sm'>
            <option value="default">Sort By Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="newestFirst">Newest First</option>
          </select>
        </div>

        {/* map products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {filteredProducts.map(( product, index)=>(
            <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price}/>
            ))}
        </div>

      </div>
      
    </div>
  )
}

export default Collections
