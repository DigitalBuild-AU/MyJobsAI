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
              <Link to="/" tabIndex="0">Dashboard</Link>
              <Link to="/jobListings" tabIndex="0">Job Listings</Link>
              <Link to="/applications" tabIndex="0">Applications</Link>
              <Link to="/cvHelper" tabIndex="0">CV Helper</Link>
              <Link to="/coverLetter" tabIndex="0">Cover Letter</Link>
              <Link to="/interviews" tabIndex="0">Interviews</Link>
              <Link to="/settings" tabIndex="0">Settings</Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Link to="/" tabIndex="0">Dashboard</Link>
          <Link to="/jobListings" tabIndex="0">Job Listings</Link>
          <Link to="/applications" tabIndex="0">Applications</Link>
          <Link to="/cvHelper" tabIndex="0">CV Helper</Link>
          <Link to="/coverLetter" tabIndex="0">Cover Letter</Link>
          <Link to="/interviews" tabIndex="0">Interviews</Link>
          <Link to="/settings" tabIndex="0">Settings</Link>
        </div>
// This component provides a responsive navigation bar for the MyJobsAI application, adjusting its layout based on the screen size.
          <Link to="/dashboard" tabIndex="0">Dashboard</Link>
          <Link to="/jobListings" tabIndex="0">Job Listings</Link>
          <Link to="/applications" tabIndex="0">Applications</Link>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;
