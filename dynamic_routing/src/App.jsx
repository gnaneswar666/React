import React from 'react';
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails'
import ErrorPage from './components/ErrorPage';
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