import React from 'react'

const Child = ({Increment}) => {
      console.log("Child rendered");

  return (
    <div>

        <button onClick={Increment}> Child Increment</button>
    </div>
  )
}

export default React.memo(Child);