import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from "react-router-dom"
import "../Styles/navbar.scss"
import Button from "@material-ui/icons/Reorder"
import Clear from "@material-ui/icons/Clear"


function Navbar() {
  const location = useLocation();

  // To open navbar from burgericon
  const button_logic = () => {
    setExpandNavbar((prev) => !prev);
  }
  const [expandNavbar, setExpandNavbar] = useState("false")
 
  // if location changes then set navbar variable to false(collapse)
  useEffect(() => {
    setExpandNavbar(false);
  }, [location])

  return (
    <nav className='navbarContainer' id={expandNavbar ? "open" : "close"}>

      <div className='toggleButton'>
        <button className='hamburger' onClick={button_logic}><Button /></button>
        <button onClick={button_logic} className='cross'><Clear /></button>
      </div>
      <NavLink to={'Portfolio_/'} className="navbar-name">Eero Kantonen</NavLink>
      <div className='linkss'>
        <NavLink to={'Portfolio_/'}>Home</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/experience"}>Experience</NavLink>
        
      </div>

    </nav>
  )
}

export default Navbar