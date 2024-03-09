/**
 * coverLetterAPI.js
 * 
 * This file contains functions for making API calls related to cover letter management and generation.
 * It includes functionalities such as creating, updating, fetching, and deleting cover letters associated with user job applications.
 */
import httpClient from './httpClient';

export const generateCoverLetter = async (jobDescription, userName, userSkills, userExperience, coverLetterTemplate, coverLetterTone) => {
  try {
    const response = await httpClient.post('/coverletter', {
      jobDescription,
      userName,
      userSkills,
      userExperience,
      coverLetterTemplate,
      coverLetterTone
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to generate Cover Letter: ${error.response.status} ${error.response.statusText}`, error);
    throw { status: error.response.status, message: error.response.statusText };
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
/**
 * Generates a cover letter based on the provided job description, user name, skills, and experience.
 * 
 * @param {string} jobDescription - The job description for which the cover letter is being generated.
/**
@swagger
@post('/coverletter')
@tags ['Cover Letter Generation']
@description Generates a cover letter based on user inputs including job description, user name, skills, experience, preferred template, and tone.
@parameter {string} jobDescription - The job description for the cover letter in the request body.
@parameter {string} userName - The user's name in the request body.
@parameter {string} userSkills - The user's skills in the request body.
@parameter {string} userExperience - The user's experience in the request body.
@parameter {string} coverLetterTemplate - The chosen template for the cover letter in the request body.
@parameter {string} coverLetterTone - The desired tone for the cover letter in the request body.
@response 200 {object} - Successfully generated cover letter with the cover letter text.
@response 400 {object} - Bad request, incorrect request body format.
@response 500 {object} - Internal server error.
*/
 * @param {string} userName - The name of the user for whom the cover letter is being generated.
 * @param {string} userSkills - The skills of the user to be included in the cover letter.
 * @param {string} userExperience - The experience of the user to be highlighted in the cover letter.
 * @returns {Promise} A promise that resolves with the response from the cover letter generation endpoint.
 */
export const generateCoverLetter = async (jobDescription, userName, userSkills, userExperience) => {
 * @param {Object} response - The server's response containing the generated cover letter.
 * @returns {string} The generated cover letter.
 */
/**
 * Logs an error message if the cover letter generation fails.
 * @param {Object} error - The error object containing details about the failure.
 */
