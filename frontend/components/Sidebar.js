import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <nav className="sidebar-nav">
        <Link to="/employmentHistory" className="sidebar-link" onClick={toggleSidebar}>Employment History</Link>
        <Link to="/skillsInventory" className="sidebar-link" onClick={toggleSidebar}>Skills Inventory</Link>
        <Link to="/coverLetterGeneration" className="sidebar-link" onClick={toggleSidebar}>Cover Letter Generation</Link>
        <Link to="/resumeCustomization" className="sidebar-link" onClick={toggleSidebar}>Resume Customization</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
// This component renders a sidebar navigation menu for the MyJobsAI application, which can be toggled open and closed.
export default Sidebar;
