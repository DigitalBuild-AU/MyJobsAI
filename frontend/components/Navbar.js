import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>MyJobsAI</Link>
      <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
              <li className='nav-item active'>
                  <Link className='nav-link' to='/'>Dashboard</Link>
              </li>
              <li className='nav-item'>
                  <Link className='nav-link' to='/jobListings'>Job Listings</Link>
              </li>
              <li className='nav-item'>
                  <Link className='nav-link' to='/applications'>Applications</Link>
              </li>
              <li className='nav-item'>
                  <Link className='nav-link' to='/cvHelper'>CV Helper</Link>
              </li>
              <li className='nav-item'>
                  <Link className='nav-link' to='/coverLetter'>Cover Letter</Link>
              </li>
              <li className='nav-item'>
                  <Link className='nav-link' to='/interviews'>Interviews</Link>
              </li>
              <li className='nav-item'>
import NavLinks from './NavLinks';
/**
 * This file defines the Navbar component used across the MyJobsAI application.
 * It renders the main navigation bar allowing users to navigate between different sections of the application.
 */
/**
 * Navbar function that returns a navigation bar component.
 * No parameters.
 * Returns a JSX element representing the navigation bar.
 */
                  <Link className='nav-link' to='/settings'>Settings</Link>
              </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/' onClick={() => handleSetActiveLink('dashboard')}>MyJobsAI</Link>
      <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
          <NavLinks activeLink={activeLink} setActiveLink={handleSetActiveLink} />
      </div>
    </nav>
  );
};
