  /**
   * Test case: Removes existing bootstrap script tag and appends a new one.
   * Verifies that if a Bootstrap script tag already exists, it is replaced with a new one, ensuring only one script tag is present.
   */
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

  /**
   * Test case: Appends a bootstrap script tag when none exists.
   * Verifies that a Bootstrap script tag is correctly appended to the document body when no such tag exists beforehand.
   */
  it('appends bootstrap script tag when none exists', () => {
  /**
   * Test: Ensures that an existing Bootstrap script tag is removed and a new one is appended correctly.
   * This test simulates a scenario where a Bootstrap script tag already exists in the document,
   * and verifies that the loadBootstrapScript function removes the existing tag before appending a new one.
   */
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

/**
 * Tests for bootstrapUtils.js - This file contains tests that ensure the functionality of the bootstrap utility functions,
 * specifically focusing on the dynamic loading of the Bootstrap script into the document.
 */
  /**
   * Test: Verifies that a Bootstrap script tag is appended when none exists.
   * This test checks the functionality of the loadBootstrapScript function in a scenario where no Bootstrap script tag is present in the document.
   * It ensures that the function correctly appends a new Bootstrap script tag.
  /**
   * Test to ensure that if a bootstrap script tag already exists, it is removed and a new one is appended.
   * This test verifies that only one script tag for the bootstrap script remains in the document.
   */
/**
 * Describes the suite of tests for bootstrap utility functions.
 */
