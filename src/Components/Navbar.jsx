import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth0 } from "@auth0/auth0-react";

export const AcmeLogo = () => {
  return (
    <img src="https://freepngdesign.com/content/uploads/images/pizza-emoji-icon-9477.png" alt="image"  style={{height:"22px" , width:"31px"}}/>
  );
};

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated , logout} = useAuth0();
  const [isMenuOpen,setIsMenuOpen]=useState(false); 
  const toggleMenu =()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
    <nav className='navbar'>
      
      <div className='navbar-logo'><AcmeLogo/>Foodies</div>
      <div className="menu-bar" onClick={toggleMenu}>< MenuIcon/></div>
      
      <ul className={isMenuOpen ? 'navbar-link active' : 'navbar-link'}>
        <li><NavLink to="/"  onClick={toggleMenu}>Home</NavLink></li>
        <li><NavLink to="/Menu"  onClick={toggleMenu}>Menu</NavLink></li>
        <li><NavLink to="/Contact"  onClick={toggleMenu}>Contact</NavLink></li>
        <li><NavLink to="/About"  onClick={toggleMenu}>About</NavLink></li>
        {
        isAuthenticated ? (
        <NavLink color="foreground" >
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        </NavLink>
        ) :
        (
        <NavLink color="foreground" >
        <li onClick={() => loginWithRedirect()}>Log In</li>
        </NavLink>

        )
      }
      </ul>
    </nav>
    </>
  )
}

export default Navbar
