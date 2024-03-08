import React, { useEffect } from 'react';
import Navbar from './Navbar';

const Settings = () => {
  useEffect(() => {
    const bootstrapScriptTag = document.querySelector('script[src*="bootstrap.bundle.min.js"]');
    if (bootstrapScriptTag) {
      bootstrapScriptTag.remove();
    }

    const newBootstrapScript = document.createElement('script');
    newBootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(newBootstrapScript);

    return () => {
      if (newBootstrapScript.parentNode) {
        newBootstrapScript.parentNode.removeChild(newBootstrapScript);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* Content from settings.html goes here, converted to JSX */}
      {/* Placeholder for settings content */}
    </>
  );
};

export default Settings;
