/**
 * Renders the applications page.
 * This component displays the Applications component, allowing users to view and manage job applications.
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
