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
"""
This module contains utility functions for handling CV-related requests and responses within the MyJobsAI application. It includes functions to send CV analysis requests to the backend and process the responses for CV suggestions.
"""
import axios from 'axios';
