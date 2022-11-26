import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <>
    <nav className='navbar navbar-dark bg-info navbar-expand-lg'>
      <Link className='navbar-brand'to="/">Zoom CRUD</Link>
      <div className='ml-auto'>
        <ul className='navbar-nav'>
        <li className='nav-list'><Link className='nav-link'to="/">Home</Link></li>
        <li className='nav-list'><Link className='nav-link'to="/createproduct">CreateProduct</Link></li>
        <li className='nav-list'><Link className='nav-link'to="/productlist">ProductList</Link></li>
        <li className='nav-list'><Link className='nav-link'to="/admin">Admin</Link></li>
        
        </ul>
      </div>
    </nav>
    </>
}

export default Navbar