import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { loadBootstrapScript } from '../utils/bootstrapUtils';

describe('bootstrapUtils tests', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  afterEach(cleanup);

  it('removes existing bootstrap script tag and appends new one', () => {
    document.body.innerHTML = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>';
    loadBootstrapScript();
    const scriptTags = document.querySelectorAll('script');
    expect(scriptTags.length).toBe(1);
    expect(scriptTags[0]).toHaveAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');
    expect(scriptTags[0]).toHaveAttribute('async', '');
  });

  it('appends bootstrap script tag when none exists', () => {
    loadBootstrapScript();
    const scriptTags = document.querySelectorAll('script');
    expect(scriptTags.length).toBe(1);
    expect(scriptTags[0]).toHaveAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');
    expect(scriptTags[0]).toHaveAttribute('async', '');
  });
});
describe('loadBootstrapScript utility function', () => {
  it('correctly creates and appends the Bootstrap script tag to the document body', () => {
    document.body.innerHTML = '';
    loadBootstrapScript();
    const scriptTag = document.querySelector('script[src*="bootstrap.bundle.min.js"]');
    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag).toHaveAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');
    expect(scriptTag).toHaveAttribute('async', true);
    expect(document.body).toContainElement(scriptTag);
  });
});
