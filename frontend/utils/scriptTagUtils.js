/**
 * This file contains utility functions for dynamically adding or removing the Bootstrap script tag.
 * These functions are used to manage the inclusion of Bootstrap's JavaScript dynamically in the application.
 */

/**
 * Removes the Bootstrap script tag from the document.
 * This function iterates through all script tags and removes the one that includes 'bootstrap.bundle.min.js' in its src attribute.
 */
const removeBootstrapScriptTag = () => {
    const scriptTags = document.getElementsByTagName('script');
    for (let i = 0; i < scriptTags.length; i++) {
        if (scriptTags[i].src.includes('bootstrap.bundle.min.js')) {
            scriptTags[i].parentNode.removeChild(scriptTags[i]);
            break;
        }
    }
};

/**
 * Appends a new Bootstrap script tag to the document.
 * This function creates a new script tag with the src attribute set to the Bootstrap's JavaScript bundle and appends it to the document body.
 */
const appendBootstrapScriptTag = () => {
    const newBootstrapScript = document.createElement('script');
    newBootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(newBootstrapScript);
};
/**
 * Removes the Bootstrap script tag from the document.
 * This function iterates through all script tags and removes the one that includes 'bootstrap.bundle.min.js' in its src attribute.
 */
