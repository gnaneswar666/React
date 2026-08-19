import React from 'react'
import products from '../Data/data'
import {Link} from 'react-router-dom'
import "../App.css"
const Products = () => {
  //console.log(products);
  return (
    <div className='container'>
      <h2>Products List</h2>
      <div className='grid'>
        {products.map((product)=>(
          <div className='card' key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.img} alt="" height="150px" width="150px" />
            <Link to={`/products/${product.id}`}> <button>View</button></Link>  
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default Products