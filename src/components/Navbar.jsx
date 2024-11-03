import React, { useState } from "react";
import "../styles/Navbar.css"; // Import your CSS file for styling
import ToggleButton from "./Button"; // Import the ToggleButton component

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-gradient-to-tl from-emerald-900 to-neutral-900">
      <div className="navbar-container">
        <h1 className="logo ">SJ</h1>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#profile" onClick={toggleMenu}>
              Profile
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Theme Toggle Button */}
        <div className="theme-toggle-container ml-2">
          <ToggleButton isOn={isDarkMode} toggle={toggleTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
