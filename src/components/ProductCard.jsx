import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function ProductCard({products,sendData}) {
    console.log(products);
    
  return (
    <div>
        <button onClick={()=>sendData("Welcome to React")}>Send Data</button>
        <Row>
        {products.length > 0 ? products.map(item => (
          <Col key={item.id}>
          <Link to={`/viewProduct/${item.id}`}>
          <Card style={{ width: '18rem',height:'600px',margin:'20px',padding:'10px' }}>
              <Card.Img variant="top" src={item.image} height={'350px'} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.price}
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Link>
            
          </Col>
        ))
      :"no data"}
      </Row>
      
    </div>
  )
}

export default ProductCard
