import React, { useState } from 'react'
import Counter from "./counter.jsx"
import Reset from "./reset.jsx"
const App = () => {
  const [count,setCounter]=useState(0);
  return (
    <div>

        <h1>{count}</h1>
      <Counter count={count} setCount={setCounter}/>
      <Reset setCount={setCounter}/>
    </div>
  )
}

export default App