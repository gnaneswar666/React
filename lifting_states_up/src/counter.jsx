import React from 'react'

const Counter = ({count,setCount}) => {
    const Increment=()=>{
        setCount(count+1);
    }
  return (
    <button onClick={Increment}> Increment</button>
  )
}

export default Counter;