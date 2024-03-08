import React, { useEffect } from 'react';
import Navbar from './Navbar';

const SettingsComponent = () => {
  useEffect(() => {
    
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Settings | MyJobsAI</h1>
        <div>
          <p>Settings functionality will be implemented here.</p>
        </div>
      </div>
    </>
  );
};

export default SettingsComponent;
import { loadBootstrapScript } from '../../utils/bootstrapUtils';
