import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark text-white navbar-expand-lg'>
            <Link to='/' className='navbar-brand'>PoductApp-CRUD Example</Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-list"><Link to="/CreateProduct" className="nav-link">CreateProduct</Link></li>
                <li className="nav-list"><Link to="/ListProducts" className="nav-link">ListProducts</Link></li>
                <li className="nav-list"><Link to="/Admin" className="nav-link">Admin</Link></li>
                {/* <li className="nav-list"><Link to="/Edit" className="nav-link">Edit</Link></li> */}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar