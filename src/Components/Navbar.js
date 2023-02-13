import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => (
  <div className="navbar">
    <img src={logo} alt="Mapfrica logo" className="logo" />
    <h1 className="siteTitle">MAPFRICA</h1>
  </div>
);

export default Navbar;
