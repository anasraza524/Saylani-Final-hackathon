import React from 'react'
import './NavBar.css'
import { Link} from "react-router-dom";
import   {styled} from '@mui/material'
const LinkPage = styled(Link)({
    textDecoration:'none',
    color:' white',
    fontSize:"0.5em"
    
    
   });
const NavBar = () => {

  return (
    <div><nav id="navbar" class="">
    <div class="nav-wrapper">
    
      <div class="logo">
    
        <LinkPage to="/" ><i class="fas fa-chess-knight"></i> Logo</LinkPage>
      </div>
  
  
      <ul id="menu">
        <li><a ><LinkPage to="/">Home</LinkPage></a></li>
     <li><a ><LinkPage to="/About" >About</LinkPage></a></li>
    <li><a ><LinkPage to="/" >Home</LinkPage></a></li>
    <li><a ><LinkPage to="/" >Home</LinkPage></a></li>
      </ul>
    </div>
  </nav>
  
  

  <div class="menuIcon">
    <span class="icon icon-bars"></span>
    <span class="icon icon-bars overlay"></span>
  </div>
  
  
  <div class="overlay-menu">
    <ul id="menu">
        <li><a ><LinkPage to="/" >Home</LinkPage></a></li>
        <li><a ><LinkPage to="/">Home</LinkPage></a></li>
        <li><a ><LinkPage to="/">Home</LinkPage></a></li>
        <li><a ><LinkPage to="/">Home</LinkPage></a></li>
      </ul>
  </div></div>
  )
}

export default NavBar