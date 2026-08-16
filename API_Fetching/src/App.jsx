import React, { useEffect, useState } from 'react'
import "./App.css"
import axios from 'axios';
import Loading from './Loading/Loading';
const App = () => {
  const [products,setProducts]=useState([]);
  const [loading,setloading]=useState(true);
  const [error,setError]=useState(null);
  useEffect(()=>{
    //fetch("https://fakestoreapi.com/products")
  //  .then((res)=>res.json())
   // .then((data)=>setProducts(data));
   axios.get("https://fakestoreapi.com/products")
   .then((res)=>{setProducts(res.data)
     setloading(false);
   })
   .catch((e)=>{console.log(e)
       setloading(false);
       setError("Please Try Later .. ")

   });

  },[]);
  return (
    <div className='products-container'>
      <h2   className='title'> Products List </h2>
      <div className='products-grid'>

      {
      
      
      products.map((product)=>{
        return(
          <div className='product-card' key={product.id}>
            <img className='product-image' src={product.image} alt="" />
            <h3 className='products-title'>{product.title}</h3>
            <p className='product-price'>{product.price}</p>
            <p className='product-rating'>{product.rating.rate}-{product.rating.count}</p>

          </div>
        )
      })
      
      }

      </div>
        <div>{loading&&(<Loading/>)}</div>
        <div>{error&&(<h2>{error}</h2>)}</div>

    </div>
  )
}

export default App