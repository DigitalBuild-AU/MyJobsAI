/**
 * Utility functions for managing script tags in the document. Includes functions to add or remove the Bootstrap script tag dynamically.
 */

/**
 * Removes the existing Bootstrap script tag from the document.
 * This function searches through all <script> tags in the document and removes the one that includes 'bootstrap.bundle.min.js' in its src attribute.
 * It is used to ensure that there are no duplicate Bootstrap script tags in the document.
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

// Call this function when Bootstrap script conflicts are detected.

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
 * Appends a new Bootstrap script tag to the document.
 * This function creates a new <script> tag with the src attribute set to the latest Bootstrap bundle URL and appends it to the document's body.
 * It ensures that the Bootstrap JavaScript functionalities are available to the application.
 */
