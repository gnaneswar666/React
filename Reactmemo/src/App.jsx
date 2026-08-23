import React, { useMemo, useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  const [number,setNumber]=useState(1);
   const slowFunction=(number)=>{
      console.log("slow Function");
      for(let i=0;i<=1000000000;i++){}

      console.log("completed");
      return number+1;
      
      
    };
   const result= useMemo(()=>{
      return slowFunction(number);
    },[number])
    // const result=slowFunction(number);

  return (

    


   

    <div>

      <h1>count - {count}</h1>
      <button onClick={()=>setCount(count+1)}>Counter</button>

      <br /><br />
      <h1>Result - {result}</h1>
      <button onClick={()=>setNumber(number+1)}>Number</button>
    </div>
  )
}

export default App