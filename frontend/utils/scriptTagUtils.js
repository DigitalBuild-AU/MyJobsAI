/**
 * Removes the existing Bootstrap script tag from the document.
 * This function searches through all <script> tags in the document and removes the one that includes 'bootstrap.bundle.min.js' in its src attribute.
 * It is used to ensure that there are no duplicate Bootstrap script tags in the document.
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
