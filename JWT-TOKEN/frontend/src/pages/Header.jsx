import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/login" className="nav-link">Login</Link>  
        <Link to="/profile" className="nav-link">Profile</Link>
    </div>
  )
}

export default Header;