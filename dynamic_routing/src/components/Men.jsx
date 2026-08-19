import React from 'react'
import {Link} from "react-router-dom"
import products from '../Data/data'
const Men = () => {
  const prods=products.filter((a)=>(a.gender==="Men"))
  return (
     <div className='container'>
      <h2>Products List</h2>
      <div className='grid'>
        {prods.map((product)=>(
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

export default Men