import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
        <nav id="navbar" className="navbar navbar-dark bg-dark text-white sticky navbar-expand-lg">
            <Link to='/' className="navbar-brand">Product-CRUD</Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-list"><Link to='/' className="nav-link">Home</Link></li>
                <li className="nav-list"><Link to='/createproduct' className="nav-link">CreateProduct</Link></li>
                <li className="nav-list"><Link to='/products' className="nav-link">Products</Link></li>
                <li className="nav-list"><Link to='/admin' className="nav-link">Admin</Link></li>
            </ul>
        </nav>
  )
}

export default Navbar