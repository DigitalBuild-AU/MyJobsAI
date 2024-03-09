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
