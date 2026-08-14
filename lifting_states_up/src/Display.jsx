import React, { useState } from 'react'

const Display = ({name}) => {
    const [display,setDisplay]=useState(false);
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Display</button>
        {display&&name}
    </div>
  )
}

export default Display