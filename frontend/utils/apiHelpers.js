import httpClient from './httpClient';

async function postCoverLetter(jobDescription, userName, userSkills, userExperience) {
  try {
    const response = await httpClient.post('/cover_letter', {
      jobDescription,
      userName,
      userSkills,
      userExperience
    });
    return response.data;
  } catch (error) {
    console.error(`Error generating cover letter: ${error.response.status} ${error.response.statusText}`, error);
    throw { status: error.response.status, message: error.response.statusText };
  }
}

async function postEmploymentHistory(employmentHistory) {
  try {
    const response = await httpClient.post('/employmentHistory', { employmentHistory });
    return response.data;
  } catch (error) {
    console.error(`Failed to save employment history: ${error.response.status} ${error.response.statusText}`, error);
    throw { status: error.response.status, message: error.response.statusText };
  }
}

async function postResumeCustomization(jobDescription, userCV) {
  try {
    const response = await httpClient.post('/cv_customization', {
      jobDescription,
      userCV
    });
    return response.data;
  } catch (error) {
    console.error(`Error customizing CV: ${error.response.status} ${error.response.statusText}`, error);
    throw { status: error.response.status, message: error.response.statusText };
  }
}

async function postSkills(skills) {
  try {
    const response = await httpClient.post('/skills', { skills });
    return response.data;
  } catch (error) {
    console.error(`Failed to save skills: ${error.response.status} ${error.response.statusText}`, error);
    throw { status: error.response.status, message: error.response.statusText };
  }
}

export { postCoverLetter, postEmploymentHistory, postResumeCustomization, postSkills };
/**
 * Utility functions for making API requests to the backend for various features like cover letter generation, employment history management, CV customization, and skills inventory.
 */
/**
 * Sends a request to generate a cover letter based on user inputs.
 * @param {string} jobDescription - The job description for the cover letter.
 * @param {string} userName - The user's name.
 * @param {string} userSkills - The user's skills.
 * @param {string} userExperience - The user's experience.
 * @returns {Promise<Object>} The response object containing the generated cover letter.
 */
/**
 * Sends a request to save the user's employment history.
 * @param {Array<Object>} employmentHistory - An array of employment history objects.
 * @returns {Promise<Object>} The response object confirming the save operation.
 */
/**
 * Sends a request to customize a CV based on a job description and user's CV.
 * @param {string} jobDescription - The job description to customize the CV for.
 * @param {string} userCV - The user's current CV.
 * @returns {Promise<Object>} The response object containing the customized CV.
/**
 * Submits interview data to the backend.
 * 
 * @param {string} jobTitle - The job title for the interview.
 * @param {string} date - The date and time for the interview.
 * @param {string} notes - Notes related to the interview.
 * @returns {Promise} - The promise returned from the axios post call.
 */
async function submitInterviewData(jobTitle, date, notes) {
  try {
    const response = await httpClient.post('/interviews', { jobTitle, date, notes });
    return response.data;
  } catch (error) {
    console.error(`Error scheduling interview: ${error.response.status} ${error.response.statusText}`, error);
    throw { status: error.response.status, message: error.response.statusText };
  }
}

export { postCoverLetter, postEmploymentHistory, postResumeCustomization, postSkills, submitInterviewData };
 */
/**
 * Sends a request to save the user's skills.
 * @param {Array<string>} skills - An array of skills.
 * @returns {Promise<Object>} The response object confirming the save operation.
 */
/**
 * Generic GET request function.
 * @param {string} path - The path of the API endpoint.
 * @returns {Promise<Object>} The response data from the GET request.
 */
async function get(path) {
  try {
    const response = await httpClient.get(path);
    return response.data;
  } catch (error) {
    console.error(`Error performing GET request: ${error.response.status} ${error.response.statusText}`, error);
    throw { status: error.response.status, message: error.response.statusText };
  }
}

/**
 * Generic POST request function.
 * @param {string} path - The path of the API endpoint.
 * @param {Object} data - The data to be sent in the POST request.
 * @returns {Promise<Object>} The response data from the POST request.
 */
async function post(path, data) {
  try {
    const response = await httpClient.post(path, data);
    return response.data;
  } catch (error) {
    console.error(`Error performing POST request: ${error.response.status} ${error.response.statusText}`, error);
    throw { status: error.response.status, message: error.response.statusText };
  }
}

export { get, post };
