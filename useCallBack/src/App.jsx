import React, { useCallback, useState } from 'react'
import Child from "./Child"
const App = () => {
  const [count,setCount]=useState(0);
  const Increment=useCallback(()=>{
  setCount(prev=>prev+1)
  },[])
  console.log("Re rendered");
  
  return (
    <div>
      <h1>count- {count}</h1>
      <button onClick={Increment}> Increment</button>
      <Child Increment={Increment}/>
    </div>
  )
}

export default App