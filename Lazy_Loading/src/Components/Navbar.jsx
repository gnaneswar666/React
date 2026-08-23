import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>about</button></Link>
        <Link to="/contact"><button>contact</button></Link>
    </div>
  )
}

export default Navbar