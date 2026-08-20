import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/about'
 const router=createBrowserRouter([

  {
    path:"/",
    element:<div>
      <Navbar></Navbar>
      <Home/>
    </div>
  },
  {
     path:"/login",
    element:<div>
      <Navbar/>
      <Login/>
    </div>
  }
  ,
  {
      
     path:"/about",
    element:<div>
      <Navbar/>
      <About/>
    </div>
  
  }
]);
const App = () => {
 




  return (
   
      <RouterProvider router={router}/>
  
  )
}

export default App