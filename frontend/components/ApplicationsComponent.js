import React, { useEffect } from 'react';
import Navbar from './Navbar';

const ApplicationsComponent = () => {
  useEffect(() => {
    
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Applications | MyJobsAI</h1>
        {/* Content that was originally in applications.html goes here */}
      </div>
    </>
  );
};

export default ApplicationsComponent;
import { loadBootstrapScript } from '../../utils/bootstrapUtils';
