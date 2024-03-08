import axios from 'axios';

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
  console.error('Error submitting interview:', error);
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
