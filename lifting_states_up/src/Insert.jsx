import React, { useRef } from 'react'

const Insert = ({setName}) => {
     const nameRef=useRef("");
      const AssignName=()=>{
        setName(nameRef.current.value);
      }
  return (
    <div>
         <fieldset>
      <legend>Insert Name Here</legend>
      <input type="text" placeholder='Enter Your Name: ' ref={nameRef}/>
      <button onClick={AssignName}> Insert</button>

        </fieldset>
    </div>
  )
}

export default Insert