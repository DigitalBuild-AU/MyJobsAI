/**
 * ApplicationsPage is a React component that serves as the page for viewing and managing job applications within the MyJobsAI application.
 * It utilizes the ApplicationsComponent to render the main content.
 */
import React from 'react';
import Applications from '../components/Applications';

const ApplicationsPage = () => {
  return (
    <div className="container mt-4">
      <Applications />
    </div>
  );
};

export default ApplicationsPage;
