import React from 'react'
import { useEffect } from 'react'

const Child = ({count}) => {

    useEffect(()=>{
        console.log("child Re Rendered");
        
    })
  return (
    <div>Child</div>
  )

}

export default React.memo(Child);