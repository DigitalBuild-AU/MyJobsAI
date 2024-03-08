/**
 * ApplicationsComponent is a React functional component that renders the applications section of the MyJobsAI application.
 * This component is responsible for displaying job applications submitted by the user.
 */
import React, { useEffect } from 'react';
import Navbar from './Navbar';

const ApplicationsComponent = () => {
  useEffect(() => {
    const loadBootstrapScript = () => {
      const existingScriptTag = document.querySelector('script[src*="bootstrap.bundle.min.js"]');
      if (existingScriptTag) {
        existingScriptTag.remove();
      }
      const bootstrapScript = document.createElement('script');
      bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
      bootstrapScript.async = true;
      document.body.appendChild(bootstrapScript);
    };

    loadBootstrapScript();
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
};

export default ApplicationsComponent;
