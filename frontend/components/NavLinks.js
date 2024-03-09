import React from 'react';
import { Link } from 'react-router-dom';

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
