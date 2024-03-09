/**
 * interviewAPI.js
 * 
 * This file is dedicated to handling API requests for interview-related operations. 
 * It supports operations such as scheduling interviews, retrieving interview details, and submitting interview feedback.
 */
import httpClient from './httpClient';

/**
 * Submits interview details to the server and updates the interviews state.
 * 
 * @param {string} jobTitle - The title of the job associated with the interview.
 * @param {string} date - The date of the interview.
 * @param {string} notes - Any notes related to the interview.
 * @param {Function} updateInterviewsState - A callback function to update the interviews state with the response data.
 * @returns {Promise} A promise that resolves with the response from the interviews submission endpoint.
 */
export const submitInterview = async (jobTitle, date, notes, updateInterviewsState) => {
  try {
    const response = await axios.post('/api/interviews', {
      jobTitle,
      date,
      notes
    });
    updateInterviewsState(response.data);
  } catch (error) {
    handleInterviewError(error);
  }
};

export const handleInterviewResponse = (response) => {
  return response.data;
};

export const handleInterviewError = (error) => {
  console.error(`Error submitting interview: ${error.response.status} ${error.response.statusText}`, error);
};
/**
 * This file provides functions for interacting with the backend API for interview scheduling.
 */
/**
 * Sends interview details to the backend, updates the interviews state with the new interview, and handles any errors.
 * @async
 * @param {string} jobTitle - The title of the job for which the interview is being scheduled.
 * @param {Date} date - The date and time of the interview.
 * @param {string} notes - Any notes or additional information about the interview.
 * @param {Function} updateInterviewsState - Function to update the state with the new interview.
 */
/**
 * Processes the server's response to extract the interview details.
 * @param {Object} response - The server's response containing the interview details.
 * @returns {Object} The interview details extracted from the server's response.
 */
/**
 * Logs an error message if the interview submission fails.
 * @param {Object} error - The error object containing details about the failure.
 */
