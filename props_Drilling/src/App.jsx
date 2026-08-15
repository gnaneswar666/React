import React, { useState } from 'react'
import Dashboard from './components/Dashboard';
import "./App.css"

const App = () => {
  const [name,setName] =useState("Gnaneswar");
  return (
    <div>
      <h1>App</h1>
      <Dashboard name={name}/>
    </div>
  
  )
} 

export default App
