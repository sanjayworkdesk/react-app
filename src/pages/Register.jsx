import React, { useState } from 'react'
import { Col,Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Register() {
//   useState(initialState: string |

// Returns a stateful value, and a function to update it.
  const [username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  console.log(username,email,password);
  const navigate=useNavigate()
  const handleRegister=()=>{
    if(username==""||password==""||email==""){
      alert("please fill the form")

    }else{
      if(email in sessionStorage){
        alert("User Already Exists")
      }
      else{
        sessionStorage.setItem(email,JSON.stringify({username,email,password}))
      alert("Register Successfull")
      Navigate('/login')

      }
      
    }
  }
  
    
  return (
    <>
      

    <div>
      <h1>
        Register
      </h1>
      <Row>
        <Col></Col>
        <Col>
         <Form>
          <Form.Group className="mb-3" controlId="formBasicUser">
        <Form.Label>User Name </Form.Label>
        <Form.Control onChange={(e)=>setUsername(e.target.value)} type="username" placeholder="Enter username" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={handleRegister} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Col>
        <Col></Col>

      </Row>
      {/* <Button variant="primary">Primary</Button> */}
      {/* <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button> */}
    </div>
    </>
     
  )
}
