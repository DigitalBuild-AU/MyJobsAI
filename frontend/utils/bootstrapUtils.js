/**
 * Utility functions for dynamically loading Bootstrap resources.
 * 
 * This module provides functions to dynamically load and manage Bootstrap scripts within the application,
 * ensuring that the Bootstrap resources are correctly loaded and up to date.
 */
/**
 * Dynamically loads the Bootstrap script into the document. If an existing script tag for Bootstrap is found, it is removed and a new one is appended.
 * This ensures that the Bootstrap script is always up to date and correctly loaded.
 *
 * @param none - This function does not accept any parameters.
 * @returns {void} - This function does not return a value.
 */
/**
 * Dynamically loads the Bootstrap script into the document. If an existing script tag for Bootstrap is found, it is removed and a new one is appended.
 * This ensures that the Bootstrap script is always up to date and correctly loaded.
 *
 * @param none - This function does not accept any parameters.
 * @returns {void} - This function does not return a value.
 */
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
