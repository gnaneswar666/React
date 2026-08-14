import React, { useRef, useState } from 'react'
import Insert from "./Insert"
import Display from "./Display"
const App = () => {
  const [name,setName]=useState("");
 
  return (
    <div>

       <Insert setName={setName}/>
      <Display name={name}/>
    </div>
  )
}

export default App