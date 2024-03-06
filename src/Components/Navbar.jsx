import React from 'react'
import { NavLink } from 'react-router-dom'
import Styled from 'styled-components';

const Navbar = () => {
    const Nav = Styled.nav`
    .navbar-list{
        display: flex;
        gap: 4.8rem
    }`
  return  <Nav>
 
    <div className='menuIcon'>
      <ul className="navbar-list">
        <li>
            <NavLink to = "/" >Home</NavLink>
        </li>
        <li>
            <NavLink to = "/About" >About</NavLink>
        </li>
        <li>
            <NavLink to = "/Contact" >Contact</NavLink>
        </li>
        <li>
            <NavLink to = "/Services" >Services</NavLink>
        </li>
      </ul>  
    </div>
  </Nav>
 
  
}

export default Navbar
