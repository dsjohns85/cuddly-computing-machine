import React, { useState } from 'react';
import './Navigation.css';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pages = [
    { key: 'home', label: 'Home' },
    { key: 'symposium', label: 'Leadership & Ethics Seminar' },
    { key: 'about', label: 'About Us' },
    { key: 'resources', label: 'Resources' },
  ];

  const handleNavClick = (key: string) => {
    onPageChange(key);
    setMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h2>WP Society Cincinnati</h2>
      </div>
      <button
        className={`nav-toggle${menuOpen ? ' open' : ''}`}
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="hamburger"></span>
      </button>
      <ul className={`nav-links${menuOpen ? ' show' : ''}`}>
        {pages.map((page) => (
          <li key={page.key}>
            <button
              className={`nav-link ${currentPage === page.key ? 'active' : ''}`}
              onClick={() => handleNavClick(page.key)}
            >
              {page.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;