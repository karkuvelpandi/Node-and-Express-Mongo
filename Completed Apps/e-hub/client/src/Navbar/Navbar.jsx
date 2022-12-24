import React,{useState} from 'react'
import {Link}from 'react-router-dom'
import homeLogo from '../assets/logo.png'
import './Navbar.css'
import Dropdown from './DropDown/Dropdown'
import {MenuItems} from './DropDown/MenuItems'

const Navbar = () => {
  const [scrolled,setScrolled]= useState(false)
  const [dropDownProduct,setDropdownProduct] =useState(false)
  const [dropDownUser,setDropdownUser] =useState(false)

  const scrollToActive=()=>{
    if(window.scrollY>=75){
      setScrolled (true);
    } else { setScrolled(false)}
  }
  window.addEventListener("scroll", scrollToActive);

const onMouseEnter=(listName)=>{
    if(listName==="product"){
      if (window.innerWidth<960){setDropdownProduct(false)}
      else{setDropdownProduct(true)}
    }
   else if(listName==="user"){
      if (window.innerWidth<960){setDropdownUser(false)}
      else{setDropdownUser(true)}
    }
}
const onMouseLeave=(listName)=>{
  if(listName==="product"){
    if (window.innerWidth<960){setDropdownProduct(false)}
    else{setDropdownProduct(false)}
  }
 else if(listName==="user"){
    if (window.innerWidth<960){setDropdownUser(false)}
    else{setDropdownUser(false)}
  }
}
  return <>
  <nav className={scrolled?"nav-fixer":"nav"}>
    <div className='nav-left'>
    <Link to='/'><img src={homeLogo} className='homeLogo' alt="" /></Link>
    </div>
    
    <ul className='nav-right-list'>
            <li className="nav-item" ><Link className='nav-link' to='/'>HOME</Link></li>
            <li className="nav-item" >
            <Link className='nav-link' to="/service">SERVICES</Link>
            </li>
            <li className="nav-item" name="product"  onMouseEnter={onMouseEnter.bind(this,"Product")} onMouseLeave={onMouseLeave.bind(this,"Product")}>
              <Link className='nav-link' to='/product'>PRODUCTS</Link>
            {dropDownProduct ?<Dropdown dropdown={MenuItems.product}/>:null}
            </li>
            <li className="nav-item" name="user" onMouseEnter={onMouseEnter.bind(this,"user")} onMouseLeave={onMouseLeave.bind(this,"user")}>
              <Link className='nav-link' to='/userLogin'>LOG IN</Link>
              {dropDownUser ? <Dropdown dropdown={MenuItems.user}/>:null}
            </li>
            <li className="nav-item" ><Link className='nav-link' to="/contact">CONTACT US</Link></li>
            {/* <li><Link className='nav-link'>CAREER</Link></li>
            <li><Link className='nav-link'>BLOG</Link></li>
            <li><Link className='nav-link'>ABOUT</Link></li> */}
    </ul>

  </nav>
  </>
}

export default Navbar