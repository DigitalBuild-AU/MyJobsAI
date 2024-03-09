"""
Processes the response from the CV analysis request.

Parameters:
- response (object): The response object from the backend.
- setCvSuggestions (function): Function to update the CV suggestions state.
- setError (function): Function to update the error state.

This function updates the CV suggestions state if the response contains suggestions, otherwise, it updates the error state.
"""
import axios from 'axios';

"""
Sends a CV analysis request to the backend.

Parameters:
- jobDescription (string): The job description to analyze.
- userCV (string): The user's CV content.

Returns:
- Promise: A promise that resolves with the response from the backend.
"""
async function sendCVRequest(jobDescription, userCV) {
  const response = await axios.post('http://localhost:3000/api/gpt/cv_suggestions', { jobDescription, userCV });
  return response;
}

/**
 * Processes the backend's response containing CV suggestions.
 * @param {Object} response - The backend's response.
 * @param {Function} setCvSuggestions - State setter function for CV suggestions.
 * @param {Function} setError - State setter function for handling errors.
 * @returns {void} - This function does not return a value but updates the component's state.
 */
function processCVResponse(response, setCvSuggestions, setError) {
  if (response && response.data && response.data.suggestions) {
    setCvSuggestions(response.data.suggestions);
    setError('');
  } else {
    setError('Failed to fetch CV suggestions. Please try again.');
    setCvSuggestions('');
  }
}

export { sendCVRequest, processCVResponse };

/**
 * Sends a POST request to the backend with the user's job description and CV details.
 * @param {String} jobDescription - The job description input by the user.
 * @param {String} userCV - The CV details input by the user.
 * @returns {Promise} - A promise that resolves to the backend's response containing CV suggestions.
 * @throws {Error} - Throws an error if the request to the backend fails.
 */
/**
 * Processes the response from the backend after sending a CV request.
 * @param {Object} response - The response object from the backend.
 * @param {Function} setCvSuggestions - Function to set the CV suggestions state.
 * @param {Function} setError - Function to set the error state.
 * @effects Updates the CV suggestions or error state based on the response.
 */

"""
This module contains utility functions for handling CV-related requests and responses within the MyJobsAI application. It includes functions to send CV analysis requests to the backend and process the responses for CV suggestions.
"""
import axios from 'axios';
