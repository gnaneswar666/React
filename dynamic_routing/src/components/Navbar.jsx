import React from 'react'
import {NavLink} from 'react-router-dom'
import "../App.css"
const Navbar= () => {
  return (
    <div className='navbar'>
        <NavLink to={"/"}><button>Home</button></NavLink>
        <NavLink to={"/Products"}><button>Products</button></NavLink>
        <NavLink to={"/About"}><button>About</button></NavLink>
        <NavLink to={"/Shop"}><button>Shop</button></NavLink>

    </div>
  )

}
export default Navbar;