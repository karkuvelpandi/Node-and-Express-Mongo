import React,{useState} from 'react'
import {Link}from 'react-router-dom'
import homeLogo from '../assets/logo.png'
import './Navbar.css'
import Dropdown from './DropDown/Dropdown'
const Navbar = () => {
  const [scrolled,setScrolled]= useState(false)
  const [dropDown,setDropdown] =useState(false)

  const scrollToActive=()=>{
    if(window.scrollY>=75){
      setScrolled (true);
    } else { setScrolled(false)}
  }
  window.addEventListener("scroll", scrollToActive);
  const onMouseEnter=()=>{
    if (window.innerWidth<960){
        setDropdown(false)
    }else{
        setDropdown(true)
    }
}
const onMouseLeave=()=>{
    if (window.innerWidth<960){
        setDropdown(false)
    }
    else{
        setDropdown(false)
    }
}
  return <>
  <nav className={scrolled?"nav-fixer":"nav"}>
    <div className='nav-left'>
    <Link to='/'><img src={homeLogo} className='homeLogo' alt="" /></Link>
    </div>
    
    <ul className='nav-right-list'>
            <li className="nav-item" ><Link className='nav-link' to='/'>HOME</Link></li>
            <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link className='nav-link' to="/service">SERVICES</Link>
            {dropDown && <Dropdown/>}
            </li>
            <li className="nav-item" ><Link className='nav-link' to='/product'>PRODUCTS</Link></li>
            <li className="nav-item" ><Link className='nav-link' to='/user'>USERS</Link></li>
            <li className="nav-item" ><Link className='nav-link' to="/contact">CONTACT US</Link></li>
            {/* <li><Link className='nav-link'>CAREER</Link></li>
            <li><Link className='nav-link'>BLOG</Link></li>
            <li><Link className='nav-link'>ABOUT</Link></li> */}
    </ul>

  </nav>
  </>
}

export default Navbar