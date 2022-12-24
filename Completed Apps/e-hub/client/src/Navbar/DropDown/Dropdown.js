import React, { useState } from "react";
import './Dropdown.css'
import {MenuItems} from './MenuItems'
import { Link } from 'react-router-dom'


function Dropdown() {
   const[click,setClick]=useState(false)

   
    const handleClick=()=>setClick(!click)
  return <>
  <ul onClick={handleClick} className={click?'dropdown-menu clicked':'dropdown-menu'}>

    {MenuItems.services.map((item,index)=>{
    return<li key={index}>
        <Link className={item.cName} to={item.path} > {item.title}
        </Link>
    </li>
    })}
  </ul>
  
  </>
}

export default Dropdown