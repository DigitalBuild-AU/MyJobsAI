import axios from 'axios';

export const generateCoverLetter = async (jobDescription, userName, userSkills, userExperience) => {
  try {
    const response = await axios.post('/api/coverletter', {
      jobDescription,
      userName,
      userSkills,
      userExperience
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const handleCoverLetterResponse = (response) => {
  return response.data.coverLetter;
};

export const handleCoverLetterError = (error) => {
  console.error('Failed to generate Cover Letter:', error);
};
/**
 * This file provides functions for interacting with the backend API for cover letter generation.
 */
/**
 * Sends user inputs to the backend to generate a cover letter and returns the server's response.
 * @async
 * @param {string} jobDescription - The job description input by the user.
 * @param {string} userName - The user's name.
 * @param {string} userSkills - The user's skills.
 * @param {string} userExperience - The user's experience.
 * @returns {Promise<Object>} The server's response to the cover letter generation request.
 */
/**
 * Processes the server's response to extract the generated cover letter.
 * @param {Object} response - The server's response containing the generated cover letter.
 * @returns {string} The generated cover letter.
 */
/**
 * Logs an error message if the cover letter generation fails.
 * @param {Object} error - The error object containing details about the failure.
 */
