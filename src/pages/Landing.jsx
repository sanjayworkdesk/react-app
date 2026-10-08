import React from 'react'
import reactImg from '../assets/reactImg.jpg'
import { useNavigate } from 'react-router-dom'
function Landing() {
  // Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.
  const navigate = useNavigate()
  const changepage =()=>{
    navigate('/login')
    //alert ("btn clicked")
  }
  return (
    <div>
      <section id='bg'>
        <button id='lbtn' onClick={changepage}>
          get started
        </button>

      </section>
      <section id='bg'></section>
    <section>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXjK_IVgo0Xsckk8R0ZQcZ4c4G9bpuRBhRs9DEUVaDw&s=10" alt="" />
      </div>
      <div><img src={reactImg} alt="" /></div>
    </section>
    </div>

  )
}

export default Landing
