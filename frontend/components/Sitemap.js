import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/jobListings">Job Listings Management</Link></li>
        <li><Link to="/applicationTracking">Application Tracking</Link></li>
        <li><Link to="/employmentHistory">Employment History</Link></li>
        <li><Link to="/skillsInventory">Skills Inventory</Link></li>
        <li><Link to="/cvHelper">CV Helper</Link></li>
        <li><Link to="/coverLetterGeneration">Cover Letter Generation</Link></li>
        <li><Link to="/interviewScheduler">Interview Scheduler</Link></li>
        <li><Link to="/taskAndNetworking">Task and Networking Tracker</Link></li>
      </ul>
    </nav>
  );
};

export default Sitemap;
