import { jest } from '@jest/globals';

describe('jobListingsApp utility functions', () => {
  describe('isValidURL', () => {
    const { isValidURL } = require('../frontend/jobListingsApp');

    it('should validate http and https URLs', () => {
      expect(isValidURL('http://example.com')).toBeTruthy();
      expect(isValidURL('https://example.com')).toBeTruthy();
    });

    it('should validate URLs without protocols', () => {
      expect(isValidURL('example.com')).toBeTruthy();
    });

    it('should invalidate incorrect URLs', () => {
      expect(isValidURL('htp://example')).toBeFalsy();
      expect(isValidURL('example')).toBeFalsy();
      expect(isValidURL('')).toBeFalsy();
    });
  });

  describe('validateJobListingForm', () => {
    const { validateJobListingForm } = require('../frontend/jobListingsApp');
    let mockGetElementById;

    beforeEach(() => {
      mockGetElementById = jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        const inputs = {
          jobURL: { value: 'https://example.com' },
          jobTitle: { value: 'Software Engineer' },
          jobDescription: { value: 'Develop amazing things.' },
          salaryAmount: { value: '50000' },
          status: { value: 'Open' }
        };
        return { value: inputs[id]?.value.trim() };
      });
    });

    afterEach(() => {
      mockGetElementById.mockRestore();
    });
"""
Unit tests for utility functions in the jobListingsApp, including URL validation and form validation for job listings.
"""
Tests the isValidURL function to ensure it correctly validates both http and https URLs.
"""
Tests the isValidURL function to ensure it correctly validates URLs without protocols.
"""
Tests the isValidURL function to ensure it correctly identifies and invalidates incorrect URLs.
"""
    it('should validate the form with all valid inputs', () => {
      expect(validateJobListingForm()).toBeTruthy();
    });

    it('should invalidate the form with an incorrect URL', () => {
      mockGetElementById.mockImplementationOnce((id) => {
        if (id === 'jobURL') return { value: 'htp://wrongurl' };
        return { value: 'Valid Input' };
      });
      expect(validateJobListingForm()).toBeFalsy();
    });

    it('should invalidate the form with missing required fields', () => {
"""
Tests the validateJobListingForm function to ensure it invalidates the form when an incorrect URL is provided.
"""
      mockGetElementById.mockImplementationOnce((id) => {
        if (id === 'jobTitle') return { value: '' };
        return { value: 'Valid Input' };
      });
      expect(validateJobListingForm()).toBeFalsy();
    });
  });

  describe('displayErrorMessage', () => {
    const { displayErrorMessage } = require('../frontend/jobListingsApp');
    let mockGetElementById;
    let mockInsertAdjacentElement;

    beforeEach(() => {
      mockInsertAdjacentElement = jest.fn();
      mockGetElementById = jest.spyOn(document, 'getElementById').mockImplementation(() => ({
        insertAdjacentElement: mockInsertAdjacentElement
      }));
    });
"""
Tests the validateJobListingForm function to ensure it validates the form with all valid inputs.
"""
    afterEach(() => {
      mockGetElementById.mockRestore();
    });

    it('should display the correct error message', () => {
      const testMessage = 'Test error message';
      displayErrorMessage('testElement', testMessage);
"""
Tests the validateJobListingForm function to ensure it invalidates the form when required fields are missing.
"""
      expect(mockInsertAdjacentElement).toHaveBeenCalledWith('afterend', expect.objectContaining({
        textContent: testMessage,
        className: 'validation-error',
        style: expect.objectContaining({
          color: 'red'
        })
      }));
    });
  });
});
"""
Tests the displayErrorMessage function to ensure it displays the correct error message adjacent to the specified element.
"""
