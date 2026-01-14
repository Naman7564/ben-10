import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setMenuOpen(false);
    } else {
      console.error(`Element with id "${sectionId}" not found`);
    }
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
        <img src="/images/logo.png" alt="Ben 10 Logo" />
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('aliens')}>Aliens</li>
        <li onClick={() => scrollToSection('episodes')}>Episodes</li>
        <li onClick={() => scrollToSection('games')}>Games</li>
        <li onClick={() => scrollToSection('about')}>About</li>
      </ul>

      <div className="nav-buttons">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-fill">Sign Up</button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;

