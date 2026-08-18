import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Data/data';
import { Link } from 'react-router-dom';
import "../App.css"
const ProductDetails = () => {
    const {id}=useParams();
    console.log(id);
    const prod=products.find((item)=> (item.id===Number(id)));
    if(!prod){
        return(
            <h2>Product not Found </h2>
        );
    }
    return (
   <div className='Details'>
   
     <div className="ProductDetails">
         <Link to={"/Products"}>  <button>back</button> </Link>
        <h2>{prod.title}</h2>
        <img src={prod.img} alt="" height="200px" width="200px" />
        <p>{prod.description}</p>
        <h3>{prod.price}</h3>
    </div>
   </div>
  )
}

export default ProductDetails