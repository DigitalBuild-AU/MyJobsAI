import React, { useEffect } from 'react';
import Navbar from './Navbar'; // Assuming a Navbar component exists

const Applications = () => {
  useEffect(() => {
    // Assuming the Navbar component handles its own dynamic content loading
    // Dynamically add Bootstrap script
    const existingScriptTag = document.querySelector('script[src*="bootstrap.bundle.min.js"]');
    if (existingScriptTag) {
      existingScriptTag.remove();
    }

    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
    bootstrapScript.onload = () => console.log('Bootstrap 5 script loaded successfully.');
    bootstrapScript.onerror = (error) => console.error('Bootstrap 5 script failed to load:', error.message, error.stack);
    document.body.appendChild(bootstrapScript);

    return () => {
      // Cleanup script tag on component unmount
      if (bootstrapScript.parentNode) {
        bootstrapScript.parentNode.removeChild(bootstrapScript);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {/* Content from applications.html goes here, converted to JSX */}
      </div>
    </>
  );
};

export default Applications;
