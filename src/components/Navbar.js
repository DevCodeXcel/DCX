import React, { useState } from 'react';
import './Navbar.css'; // Assuming your CSS file for the navbar styles

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">DCX</div>
      
      {/* Hamburger menu for mobile view */}
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span> {/* 3 lines icon */}
      </button>
      
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}> {/* Toggle active class */}
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
