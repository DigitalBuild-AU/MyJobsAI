export const loadBootstrapScript = () => {
  const existingScriptTag = document.querySelector('script[src*="bootstrap.bundle.min.js"]');
  if (existingScriptTag) {
    existingScriptTag.remove();
  }
  const bootstrapScript = document.createElement('script');
  bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
  bootstrapScript.async = true;
  document.body.appendChild(bootstrapScript);
};
/**
 * bootstrapUtils.js
 * Purpose: Utility functions for loading Bootstrap resources dynamically in the application.
 */
/**
 * Dynamically loads the Bootstrap script into the document.
 * This ensures that Bootstrap's JavaScript components can be used throughout the application.
 */
