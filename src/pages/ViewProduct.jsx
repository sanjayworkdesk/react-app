import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


function ViewProduct() {
    //4 create a state to hold product details
    const[product,setProduct]=useState({})

    //1 to get id of a particular product from the current url
    // const params = useParams()
    // console.log(params.id);
    
    const {id}=useParams()
    console.log(id);

    //2 define url
    const baseUrl=`https://fakestoreapi.com/products/${id}`

    //3 get details of a products
    const getproduct=async()=>{
        try{
            const res =await fetch(baseUrl)
            const data = await res.json()
            console.log(data);
            setProduct(data)
            
            
        }catch(err){
            console.log(err);
        }
        
    }
    useEffect(()=>{
        getproduct()
    },[])


  return (
    <div>
      <Row>
        <Col>
        <img src={product.image} alt="" /></Col>
        <Col>
        <h1>{product.title}</h1></Col>
      </Row>
    </div>
  )
}

export default ViewProduct
