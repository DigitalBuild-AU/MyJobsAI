/**
 * gptUtils.js
 * This file contains utility functions for interacting with the OpenAI API to generate cover letters. 
 * Functions include generating cover letters based on job descriptions and user CVs, logging generation events, 
 * and handling errors during the cover letter generation process.
 */

const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Generates a cover letter based on a given job description and user's CV using the OpenAI API.
 * @param {string} jobDescription - The job description to base the cover letter on.
 * @param {string} userCV - The user's CV to incorporate into the cover letter.
 * @returns {Promise<string>} A promise that resolves to the generated cover letter text.
 */
async function generateCoverLetter(jobDescription, userCV) {
  try {
    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Generate a cover letter based on the following job description and user's CV:\nJob Description: ${jobDescription}\nUser CV: ${userCV}`,
    temperature: 0.7,
    max_tokens: 1024,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  return response.data.choices[0].text.trim();
}

/**
 * Logs a message indicating successful generation of a cover letter analysis and feedback.
 */
function logCoverLetterGeneration() {
  console.log("Cover letter analysis and feedback generated successfully.");
}

/**
 * Handles errors that occur during the cover letter generation process by logging the error and sending a response to the client.
 * @param {Error} error - The error object that occurred.
 * @param {Response} res - The Express response object to send the error message to the client.
 */
function handleCoverLetterError(error, res) {
  console.error(`Error processing cover letter request: ${error.message}, Stack: ${error.stack}`);
  res.status(500).json({ error: "Failed to generate cover letter analysis." });
}

module.exports = {
  generateCoverLetter,
  logCoverLetterGeneration,
  handleCoverLetterError,
};
