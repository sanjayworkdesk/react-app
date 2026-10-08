import React, { useState } from 'react'
import Child1 from '../components/Child1'
import Child2 from '../components/Child2'

function Parent() {
  const [name,setName]=useState('')
  return (
    <div>
      Parent
      <Child1 name={name} setName={setName}/>
      <Child2 name={name}/>
    </div>
  )
}

export default Parent
