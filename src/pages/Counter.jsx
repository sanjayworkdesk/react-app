import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)

  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      {/* <button onClick={()=>setCount(count-1)}>Decrement</button> */}
      <br /><br />
      <input type="text" value={count1} />
      <button onClick={()=>setCount1(count1+5)}>increment</button>
      <button onClick={()=>setCount1(count1-5)}>decrement</button>

    </div>
  )
}

export default Counter