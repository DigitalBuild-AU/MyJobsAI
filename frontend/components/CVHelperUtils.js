import axios from 'axios';

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
