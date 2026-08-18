import React from 'react'
import {NavLink} from 'react-router-dom'
import "../App.css"
const Navbar= () => {
  return (
    <div className='navbar'>
        <NavLink to={"/"}><li>Home</li></NavLink>
        <NavLink to={"/Products"}><li>Products</li></NavLink>
        <NavLink to={"/About"}><li>About</li></NavLink>
    </div>
  )

}
export default Navbar;