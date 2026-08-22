import React from 'react'
import { useState } from 'react'
import Child from './Child';
import { useEffect } from 'react';
const App = () => {
  const [count,setCount]=useState(0);
  // useEffect(()=>{
  //   console.log("re Rendered");
    
  // },[count])
  return (

    <div>
      <span>Count=  {count}</span>
      <button onClick={()=>setCount(count+1)}>add</button>
      <Child count={count}/>
    </div>
  )
}

export default App