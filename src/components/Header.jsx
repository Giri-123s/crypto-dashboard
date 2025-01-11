import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span style={{ color: '#0056F3', fontWeight: 'bold' }}>Koin</span>
        <span style={{ color: '#F59E0B', fontWeight: 'bold' }}>X</span>
        <span>™</span>
      </div>
      <nav className="nav-links">
        <a className="crypto" href="#crypto-taxes">Crypto Taxes</a>
        <a className="free" href="#free-tools">Free Tools</a>
        <a className="res" href="#resource-center">Resource Center</a>
      </nav>
      <button className="get-started-btn">Get Started</button>
    </header>
  );
}

export default Header;