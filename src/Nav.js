import "./nav.css"
import React from 'react';
import LogoComponent from "./LogoComponent";

const Nav = () => {
  return (
    <nav className="navbar">
        <div className="logo"><LogoComponent/></div>
        <ul className="nav-links">
          <li className="nav-link" ><a href="#">Home</a></li>
          <li className="nav-link"><a href="#">About</a></li>
          <li className="nav-link"><a href="#">Contact</a></li>
        </ul>
    </nav>
  );
}

export default Nav;