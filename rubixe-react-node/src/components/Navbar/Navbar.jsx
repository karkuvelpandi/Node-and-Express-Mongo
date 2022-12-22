import React,{useState} from 'react'
import {Link}from 'react-router-dom'
import homeLogo from '../../assets/logo.png'
import './Navbar.css'
const Navbar = () => {
  const [scrolled,setScrolled]= useState(false)
  const scrollToActive=()=>{
    if(window.scrollY>=75){
      setScrolled (true);
    } else { setScrolled(false)}
  }
  window.addEventListener("scroll", scrollToActive);
  return <>
  <nav className={scrolled?"nav-fixer":"nav"}>
    <div className='nav-left'>
    <Link to='/'><img src={homeLogo} className='homeLogo' alt="" /></Link>
    </div>
    
    <ul className='nav-right-list'>
            <li><Link className='li-link' to='/'>HOME</Link></li>
            <li><Link className='li-link'>SERVICES</Link></li>
            <li><Link className='li-link'>PRODUCTS</Link></li>
            <li><Link className='li-link'>AI INTERNSHIP</Link></li>
            <li><Link className='li-link'>CAREER</Link></li>
            <li><Link className='li-link'>BLOG</Link></li>
            <li><Link className='li-link'>ABOUT</Link></li>
            <li><Link className='li-link'>CONTACT US</Link></li>
    </ul>

  </nav>
  </>
}

export default Navbar