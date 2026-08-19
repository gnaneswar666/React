import React from 'react'
import { Outlet ,Link} from 'react-router-dom'
import Products from './Products'
const Shop = () => {
  return (
    <div className='ShopDiv'>

        <div className="shopDivButton">
            <Link to="men"><button>Men</button></Link>
            <Link to="women"><button>WoMen</button></Link>
        </div>
        

       <Outlet/>  
  
    </div>
  )
}

export default Shop