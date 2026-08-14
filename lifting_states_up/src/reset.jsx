import React from 'react'

const Reset = ({setCount}) => {
    const reset=()=>{
        setCount(0);
    }
  return (
    <button onClick={reset}>reset</button>
  )
}

export default Reset;