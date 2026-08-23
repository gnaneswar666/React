import React from 'react';
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails'
import ErrorPage from './pages/ErrorPage';
import Shop from './pages/Shop';
import Men from './components/Men';
import Women from './components/Women';
// ✅ Create router once, outside the component
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/About",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/Products",
    element: (
      <div>
        <Navbar />
        <Products />
      </div>
    ),
  },
  {
    path: "/Products/:id",
    element: (
      <div>
        <Navbar />
        <ProductDetails />
      </div>
    ),
  },
  {
    path:"/Shop",
    element: <div>
      <Navbar/>
      <Shop/>
    </div>,
    children:[
      {
        index:true,
        element:<Products/>
      },
      {
        path:"men",
        element:<Men/>
      },
       {
        path:"women",
        element:<Women/>
      },
      {
        path:"*",
        element:<ErrorPage/>
      }
    ]
  },
  {
    path: "*",
    element: (
      <div>
       
        <ErrorPage />
      </div>
    ),
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;