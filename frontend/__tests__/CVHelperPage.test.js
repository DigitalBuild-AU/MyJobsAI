import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CVHelperPage from '../pages/CVHelperPage';

describe('CVHelperPage', () => {
"""
Tests for the CVHelperPage component. This file includes tests for rendering the CVHelperPage, interacting with its form elements, and mocking API calls to test the component's response to various states.
"""
  let mock;
  
  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('submits form and displays CV suggestions on success', async () => {
    const jobDescription = 'Frontend Developer';
    const userCV = 'Experienced in React';
    const cvSuggestions = 'Consider highlighting your React projects.';
    mock.onPost('/api/cv/suggestions').reply(200, { suggestions: cvSuggestions });

    const { getByLabelText, getByText } = render(<CVHelperPage />);
    fireEvent.change(getByLabelText(/Job Description:/i), { target: { value: jobDescription } });
    fireEvent.change(getByLabelText(/Your CV:/i), { target: { value: userCV } });
    fireEvent.click(getByText(/Generate CV Suggestions/i));

    await waitFor(() => {
      expect(getByText(cvSuggestions)).toBeInTheDocument();
    });
  });
  """
  Tests that the CVHelperPage submits the form data correctly and displays CV suggestions upon successful API response.
  """

  it('displays error message on API request failure', async () => {
    const jobDescription = 'Frontend Developer';
    const userCV = 'Experienced in React';
    const errorMessage = 'Error fetching CV suggestions.';
    mock.onPost('/api/cv/suggestions').networkError();

    const { getByLabelText, getByText, queryByText } = render(<CVHelperPage />);
    fireEvent.change(getByLabelText(/Job Description:/i), { target: { value: jobDescription } });
    fireEvent.change(getByLabelText(/Your CV:/i), { target: { value: userCV } });
    fireEvent.click(getByText(/Generate CV Suggestions/i));

    await waitFor(() => {
      expect(queryByText(/Consider highlighting your React projects./i)).not.toBeInTheDocument();
      expect(getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
  """
  Tests the CVHelperPage's response to an API request failure, ensuring that an appropriate error message is displayed.
  """
  it('successfully fetches navbar content on component mount', async () => {
    mock.onGet('navbar.html').reply(200, 'Navbar dynamically added.');
    const { getByText } = render(<CVHelperPage />);
    await waitFor(() => {
      expect(getByText('Navbar dynamically added.')).toBeInTheDocument();
    });
  });

  it('handles failure when fetching navbar content on component mount', async () => {
  /**
   * Tests the CVHelperPage's ability to successfully fetch navbar content on component mount and verify its presence in the document.
   */
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    mock.onGet('navbar.html').networkError();
    render(<CVHelperPage />);
    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('Failed to load navbar:'));
    });
    consoleErrorSpy.mockRestore();
  });

  it('correctly handles the bootstrap script tag on component mount', () => {
    document.body.innerHTML = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>';
    render(<CVHelperPage />);
    act(() => {
      const scriptTags = document.querySelectorAll('script[src*="bootstrap.bundle.min.js"]');
      expect(scriptTags.length).toBe(1);
      expect(scriptTags[0].src).toBe('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');
    });
  });
  /**
   * Verifies the CVHelperPage's behavior when there is a failure in fetching navbar content on component mount, ensuring error handling is correctly implemented.
   */
