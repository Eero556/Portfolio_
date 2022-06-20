import React, { useEffect, useState } from 'react'
import {Link, useLocation} from "react-router-dom"
import "../Styles/navbar.css"
import Button from "@material-ui/icons/Reorder"
import Clear from "@material-ui/icons/Clear"


function Navbar() {

  // To open navbar from burgericon
  const button_logic = () =>{
    setExpandNavbar((prev) => !prev);

  }
  
  

  const [expandNavbar,setExpandNavbar] = useState("false")
  

  const location = useLocation();
  // if location changes then set navbar variable to false(collapse)
  useEffect(() => {
    setExpandNavbar(false);
  }, [location])

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      
      <div className='toggleButton'>
        <button className='hamburger' onClick={button_logic}><Button/></button>
        <button onClick={button_logic} className='cross'><Clear/></button>
      </div>
      <Link to={"/"} className="navbar-name">Eero Kantonen</Link>
      <div className='links'>
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/experience"}>Experience</Link>
      </div>
      
    </div>
  )
}

export default Navbar