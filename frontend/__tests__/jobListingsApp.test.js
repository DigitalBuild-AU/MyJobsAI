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

    afterEach(() => {
      mockGetElementById.mockRestore();
    });

    it('should display the correct error message', () => {
      const testMessage = 'Test error message';
      displayErrorMessage('testElement', testMessage);
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
