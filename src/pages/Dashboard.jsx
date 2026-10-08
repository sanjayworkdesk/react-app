import React, { useEffect, useState } from 'react'

import ProductCard from '../components/ProductCard';

function Dashboard() {
  //4.create a state to hold array of data
  const [products,setproducts]=useState([])

  //1.define url
  let baseurl='https://fakestoreapi.com/products'

  //2 create a function fetch product details
  const getproducts=async()=>{
    try {
      const res=await fetch(baseurl)//return json data
      let data=await res.json()//json to js data
      console.log(data);
      setproducts(data)
    } catch (error) {
      console.log(error);
      
    }
  }
  //3 define a use effect-handling side effect of api fetching
  useEffect(()=>{
    getproducts()
  },[])

  const handleData=(data)=>{
    console.log(data);
    
  }
  return (
   <div>
      <ProductCard products={products} sendData={handleData}/>
    </div>
  )
}

export default Dashboard