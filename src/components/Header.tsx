import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';
import logo from '../assets/Logo for lush horizons.jpg';

import SlidingCart from "./SlidingCart.tsx";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false); 
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen); 
  };

  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => setCartVisible(!cartVisible);
  return (
    <header className="custom-header">
      <div>
       
        <nav className="navbar navbar-expand-lg navbar-light">
        
          <div>
          <Link className="navbar-brand logo" to="/">
            <img
              src={logo}
              alt="Website Logo"
              style={{ width: '80px', borderRadius: '60px' }}
            />
          </Link>
          <Link className="navbar-brand logo" to="/">Lush Horizons</Link>
         </div>
       
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMenuToggle}
            aria-controls="navbarNav"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <span className="close-icon">&times;</span>
            ) : (
              <span className="navbar-toggler-icon"></span> 
            )}
          </button>

       
          <div
            className={`custom-navbar collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto" style={{ backgroundColor: '#244e3a', padding: '10px', borderRadius:'20px'}}>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleCloseMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus" onClick={handleCloseMenu}>About Us</Link>
              </li>
             
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                 
                  role="button"
                  onClick={handleDropdownToggle}
                >
                  Products
                </span>
                {dropdownOpen && (
                  <ul className="dropdown-menu show">
                    <li><Link className="dropdown-item" to="/plants" onClick={handleCloseMenu}>Plants</Link></li>
                    <li><Link className="dropdown-item" to="/tools" onClick={handleCloseMenu}>Tools</Link></li>
                    <li><Link className="dropdown-item" to="/seeds" onClick={handleCloseMenu}>Seeds</Link></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus" onClick={handleCloseMenu}>Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog" onClick={handleCloseMenu}>Blog</Link>
              </li>
              <li 
    className="open-cart-button" 
    onClick={toggleCart}
  >
    Open Cart
  </li>
  <SlidingCart show={cartVisible} onClose={toggleCart} />
             
            </ul>
          </div>

          
  


        </nav>
      </div>
    </header>
  );
}

export default Header;
