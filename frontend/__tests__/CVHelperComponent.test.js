/**
 * @file CVHelperComponent.test.js
 * @description This file contains the test suite for the CVHelperComponent, focusing on unit and integration tests that cover rendering, dynamic script loading, API interactions, and error handling. It ensures the component behaves as expected under various conditions.
 */
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import CVHelperComponent from '../components/CVHelperComponent';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { sendCVRequest, processCVResponse } from '../components/CVHelperUtils';

jest.mock('axios');

describe('CVHelperComponent', () => {
/**
 * @file CVHelperComponent.test.js
 * @description Test suite for the CVHelperComponent, focusing on rendering, dynamic script loading, API interactions, and error handling.
 */
 * Test suite for the CVHelperComponent, ensuring comprehensive coverage including rendering correctness, dynamic script loading, API interactions, and error handling. This suite is designed to ensure all functionalities previously handled by cvHelper.html are fully integrated and functional within CVHelperComponent.
 */
describe('CVHelperComponent', () => {
  /**
   * Tests if the CVHelperComponent renders correctly.
   */
  it('renders correctly', () => {
  /**
   * Tests if the CVHelperComponent correctly loads the Bootstrap script dynamically, including any additional scripts that were previously managed by cvHelper.html.
   */
  it('loads Bootstrap script dynamically', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { getByText } = render(<CVHelperComponent />);
    expect(getByText('CV Helper | MyJobsAI')).toBeInTheDocument();
  });

  /**
   * Test case: Dynamically loads the Bootstrap script for CVHelperComponent.
   * Verifies that the Bootstrap script is appended to the document body when the CVHelperComponent is rendered.
   */
  it('loads Bootstrap script dynamically', () => {
    document.body.appendChild = jest.fn();
    document.querySelector = jest.fn().mockReturnValueOnce(null);
    render(<CVHelperComponent />);
    expect(document.body.appendChild).toHaveBeenCalled();
    expect(document.body.appendChild.mock.calls[0][0].src).toBe('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');
  });
});

  it('triggers API call with correct data on form submission, ensuring all API functionalities from cvHelper.html are replicated', async () => {
  });
});

  it('triggers API call with correct data on form submission', async () => {
    axios.post.mockResolvedValue({ data: { suggestions: 'Your CV is great!' } });
    const { getByLabelText, getByText } = render(<CVHelperComponent />);
    fireEvent.change(getByLabelText('Job Description'), { target: { value: 'Software Engineer' } });
    fireEvent.change(getByLabelText('Your CV'), { target: { value: 'My CV content' } });
    fireEvent.click(getByText('Generate Suggestions'));
    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/gpt/cv_suggestions', { jobDescription: 'Software Engineer', userCV: 'My CV content' }));
  });

});
/**
 * Tests the dynamic loading of the Bootstrap script on component mount.
 */
it('loads Bootstrap script on component mount', async () => {
  /**
   * Tests the component's state update with CV suggestions upon a successful API call.
   */
  it('updates component state with CV suggestions upon successful API call', async () => {
  jest.mock('../../utils/bootstrapUtils', () => ({
    loadBootstrapScript: jest.fn(),
  }));
  const { loadBootstrapScript } = require('../../utils/bootstrapUtils');
  render(<CVHelperComponent />);
  expect(loadBootstrapScript).toHaveBeenCalledTimes(1);
});

  it('updates component state with CV suggestions upon successful API call', async () => {
   * Tests handling of errors correctly if the API call fails, including scenarios previously covered in cvHelper.html.
   */
  it('handles errors correctly if API call fails', async () => {
    const mockSuggestions = 'Consider highlighting your teamwork skills.';
    axios.post.mockResolvedValue({ data: { suggestions: mockSuggestions } });
    const { getByText, getByLabelText } = render(<CVHelperComponent />);
    fireEvent.change(getByLabelText('Job Description'), { target: { value: 'Software Engineer' } });
    fireEvent.change(getByLabelText('Your CV'), { target: { value: 'My CV content' } });
    fireEvent.click(getByText('Generate Suggestions'));
    await waitFor(() => expect(getByText(mockSuggestions)).toBeInTheDocument());
  });

  /**
   * Test case: Handles errors correctly if the API call fails in CVHelperComponent.
   * Verifies that an error message is displayed if the API call to generate CV suggestions fails.
   */
  it('handles errors correctly if API call fails', async () => {
    axios.post.mockRejectedValue(new Error('Failed to generate CV suggestions.'));
    const { getByText, getByLabelText } = render(<CVHelperComponent />);
    fireEvent.change(getByLabelText('Job Description'), { target: { value: 'Software Engineer' } });
    fireEvent.change(getByLabelText('Your CV'), { target: { value: 'My CV content' } });
    fireEvent.click(getByText('Generate Suggestions'));
    await waitFor(() => expect(getByText('Error fetching CV suggestions: Failed to generate CV suggestions., Stack: undefined')).toBeInTheDocument());
  });
    fireEvent.click(getByText('Generate Suggestions'));
    await waitFor(() => expect(getByText(mockSuggestions)).toBeInTheDocument());
  });

  it('handles errors correctly if API call fails', async () => {
    axios.post.mockRejectedValue(new Error('Failed to generate CV suggestions.'));
    const { getByText, getByLabelText } = render(<CVHelperComponent />);
    fireEvent.change(getByLabelText('Job Description'), { target: { value: 'Software Engineer' } });
    fireEvent.change(getByLabelText('Your CV'), { target: { value: 'My CV content' } });
    fireEvent.click(getByText('Generate Suggestions'));
    await waitFor(() => expect(getByText('Error fetching CV suggestions: Failed to generate CV suggestions., Stack: undefined')).toBeInTheDocument());
  });
describe('sendCVRequest', () => {
  it('successfully makes an API call', async () => {
    const mockResponse = { data: { suggestions: 'Test suggestion' } };
    axios.post.mockResolvedValue(mockResponse);
    const response = await sendCVRequest('Software Engineer', 'My CV content');
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/gpt/cv_suggestions', { jobDescription: 'Software Engineer', userCV: 'My CV content' });
    expect(response).toEqual(mockResponse);
  });
  it('processes a response with suggestions correctly', () => {
    const mockResponse = { data: { suggestions: 'Excellent teamwork skills.' } };
    const setCvSuggestions = jest.fn();
    const setError = jest.fn();
    processCVResponse(mockResponse, setCvSuggestions, setError);
    expect(setCvSuggestions).toHaveBeenCalledWith('Excellent teamwork skills.');
    expect(setError).toHaveBeenCalledWith('');
  });

  it('handles a response without suggestions (error case)', () => {
    const mockResponse = {};
    const setCvSuggestions = jest.fn();
    const setError = jest.fn();
    processCVResponse(mockResponse, setCvSuggestions, setError);
    expect(setError).toHaveBeenCalledWith('Failed to fetch CV suggestions. Please try again.');
    expect(setCvSuggestions).toHaveBeenCalledWith('');
  });

  it('handles null or undefined response correctly', () => {
    const setCvSuggestions = jest.fn();
    const setError = jest.fn();
    processCVResponse(null, setCvSuggestions, setError);
    expect(setError).toHaveBeenCalledWith('Failed to fetch CV suggestions. Please try again.');
    expect(setCvSuggestions).toHaveBeenCalledWith('');
    processCVResponse(undefined, setCvSuggestions, setError);
    expect(setError).toHaveBeenCalledWith('Failed to fetch CV suggestions. Please try again.');
    expect(setCvSuggestions).toHaveBeenCalledWith('');
  });

  it('handles failure in API call', async () => {
    axios.post.mockRejectedValue(new Error('API call failed'));
    await expect(sendCVRequest('Software Engineer', 'My CV content')).rejects.toThrow('API call failed');
  });
});
/**
 * Initiates an API call to get CV suggestions based on the job description and user's CV.
 * @param {string} jobDescription - The job description input by the user.
 * @param {string} userCV - The CV content input by the user.
 * @returns {Promise<Object>} The response from the API containing CV suggestions.
 */
/**
 * Test suite for sendCVRequest function
 * This suite tests the sendCVRequest function, which is responsible for making an API call to the backend with the user's job description and CV content. It checks if the function correctly handles both successful responses and errors.
 * @param {string} jobDescription - The job description input by the user.
 * @param {string} userCV - The CV content input by the user.
 * @returns {Promise<Object>} A promise that resolves with the API response containing CV suggestions or rejects with an error.
 */
/**
 * Test suite for processCVResponse function
 * This suite tests the processCVResponse function, which processes the response from the API call made by sendCVRequest. It checks if the function correctly updates the component state with CV suggestions or an error message based on the response.
 * @param {Object} response - The response object from the API call, containing either CV suggestions or an error.
 * @param {Function} setCvSuggestions - The state setter function for updating CV suggestions.
 * @param {Function} setError - The state setter function for updating the error message.
 * @returns {void} Does not return anything but updates the component state based on the response.
 */
describe('processCVResponse', () => {
  it('processes a response with suggestions correctly', () => {
    const mockResponse = { data: { suggestions: 'Test suggestion' } };
    const setCvSuggestions = jest.fn();
    const setError = jest.fn();
    processCVResponse(mockResponse, setCvSuggestions, setError);
    expect(setCvSuggestions).toHaveBeenCalledWith('Test suggestion');
    expect(setError).toHaveBeenCalledWith('');
  });

  it('handles a response without suggestions (error case)', () => {
    const mockResponse = {};
    const setCvSuggestions = jest.fn();
    const setError = jest.fn();
    processCVResponse(mockResponse, setCvSuggestions, setError);
    expect(setError).toHaveBeenCalledWith('Failed to fetch CV suggestions. Please try again.');
    expect(setCvSuggestions).toHaveBeenCalledWith('');
  });
});

  it('sends a request with correct URL and payload', async () => {
    axios.post.mockResolvedValue({ data: { success: true } });
    const jobDescription = 'Software Engineer';
    const userCV = 'My CV content';
    await sendCVRequest(jobDescription, userCV);
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/gpt/cv_suggestions', { jobDescription, userCV });
  });

  it('handles network or server error appropriately', async () => {
    axios.post.mockRejectedValue(new Error('Network error'));
    const jobDescription = 'Software Engineer';
    const userCV = 'My CV content';
    await expect(sendCVRequest(jobDescription, userCV)).rejects.toThrow('Network error');
  });
