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
