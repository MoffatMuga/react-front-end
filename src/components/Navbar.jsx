import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/login">LOG IN</Link>
    
    </nav>
  );
};

export default Navbar;
