import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ResponsiveNavbar = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateView = () => {
    setIsMobileView(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  return (
    <nav>
      {isMobileView ? (
        <div>
          <button aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </button>
          {menuOpen && (
            <div>
              <Link to="/dashboard" tabIndex="0">Dashboard</Link>
              <Link to="/jobListings" tabIndex="0">Job Listings</Link>
              <Link to="/applications" tabIndex="0">Applications</Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Link to="/dashboard" tabIndex="0">Dashboard</Link>
          <Link to="/jobListings" tabIndex="0">Job Listings</Link>
          <Link to="/applications" tabIndex="0">Applications</Link>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;
