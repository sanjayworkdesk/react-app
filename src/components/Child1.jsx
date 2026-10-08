import React from 'react'

function Child1({name,setName}) {
  return (
    <div>
      Child1
      <button onClick={()=>setName("Dinkan")}>Get Name</button>
    </div>
  )
}

export default Child1
