import React from 'react';
import './Navigation.css';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const pages = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'symposium', label: 'Symposium' },
    { key: 'registration', label: 'Registration' },
    { key: 'resources', label: 'Resources' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h2>WP Society Cincinnati</h2>
      </div>
      <ul className="nav-links">
        {pages.map((page) => (
          <li key={page.key}>
            <button
              className={`nav-link ${currentPage === page.key ? 'active' : ''}`}
              onClick={() => onPageChange(page.key)}
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