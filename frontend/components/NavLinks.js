/**
 * File: NavLinks.js
 *
 * Description:
 * This file defines the NavLinks component, which is responsible for rendering the navigation links within the MyJobsAI application. Utilizing React and react-router-dom, NavLinks dynamically generates a list of navigation links based on provided data. It manages the active state of these links through `activeLink` and `setActiveLink` props, highlighting the currently active link and providing a seamless navigation experience across the application. This component plays a crucial role in the user interface by organizing access to the application's various features and pages.
 */

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders the navigation links for the application.
 * 
 * This function takes two parameters: `activeLink` which indicates the currently active navigation link,
 * and `setActiveLink` which is a function to update the state of the active link. It maps through a list
 * of link objects, creating a list item for each link with appropriate styling and functionality.
 * 
 * @param {string} activeLink - The name of the currently active link.
 * @param {Function} setActiveLink - Function to set the active link.
 * @returns {JSX.Element} A JSX element representing the list of navigation links.
 */

const NavLinks = ({ activeLink, setActiveLink }) => {
  const links = [
    { name: 'dashboard', path: '/' },
    { name: 'jobListings', path: '/jobListings' },
    { name: 'applications', path: '/applications' },
    { name: 'cvHelper', path: '/cvHelper' },
    { name: 'coverLetter', path: '/coverLetter' },
    { name: 'interviews', path: '/interviews' },
    { name: 'settings', path: '/settings' }
  ];

  return (
    <ul className='navbar-nav'>
      {links.map(link => (
        <li key={link.name} className={`nav-item ${activeLink === link.name ? 'active' : ''}`}>
          <Link className='nav-link' to={link.path} onClick={() => setActiveLink(link.name)}>
            {link.name.charAt(0).toUpperCase() + link.name.slice(1).replace(/([A-Z])/g, ' $1').trim()}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
