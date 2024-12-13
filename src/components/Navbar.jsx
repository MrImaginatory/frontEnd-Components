import React, { useState } from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <header className="page-header">
      <div className="page-header__top">
        <div className="page-header__logo">LOGO</div>
        <div className="page-header__toggle" onClick={toggleMenu}>☰</div>
      </div>
      <nav className="page-header__bottom">
        <ul
          id="navigation"
          className={`navigation ${isResponsive ? 'navigation--visible' : ''}`}
        >
          <li className="navigation__item">Home</li>
          <li className="navigation__item">About</li>
          <li className="navigation__item">Portfolio</li>
          <li className="navigation__item">Blog</li>
          <li className="navigation__item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;