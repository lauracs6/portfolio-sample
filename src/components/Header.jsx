import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles.css';

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <img 
        src="/images/portfolio1.png" 
        alt="logo" 
        className="logo"
      />
      <div className="header-text">
      <h1 className="site-title">
        <Link to="/">DigitalEvolution S.A</Link>
      </h1>      
        <nav className="nav-links">
          <Link
            to="/portfolio"
            className={location.pathname === '/portfolio' ? 'active' : ''}
          >
            Portfolio
          </Link>
          <Link
            to="/newsletter"
            className={location.pathname === '/newsletter' ? 'active' : ''}
          >
            Newsletter
          </Link>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
