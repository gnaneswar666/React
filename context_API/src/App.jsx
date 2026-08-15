import React from 'react'
import { useState } from 'react'
import Dashboard from './components/Dashboard';
import { userNameContext } from './contexts/userContext';
import Footer from './components/Footer';
const App = () => {
  const [name,setName] =useState("Gnaneswar");
    const[count,setCount]=useState(0);
    const increment=()=>{
      setCount(count+1);
    }
  return (
   <div>
     <userNameContext.Provider value={{name,count,increment}}>
      <h1>App</h1>
      <Dashboard/>

    </userNameContext.Provider>
  
  {/*  here we get error because we are accesing userName contexxt in footer which is not in username Context   <Footer/>*/}
   </div>
  )
}

export default App