import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <header style={{ width:'100%', height:'60px',backgroundColor:'grey', color:'white' }}>
      <h1 id='head'>React</h1>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li> <Link to={'/register'}>Register </Link> </li>
        <li> <Link to={'/Dashboard'}>Dashboard </Link> </li>


      </ul>

    </header>
    
  )
}

export default Header
