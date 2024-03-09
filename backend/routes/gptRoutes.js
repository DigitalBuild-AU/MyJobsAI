/**
 * File: gptRoutes.js
 * Description: This file contains the Express routes for the MyJobsAI application, specifically for generating CV suggestions, cover letters, and CV customizations using the OpenAI API. It outlines the endpoints available for processing user inputs and generating relevant outputs, leveraging utility functions for specific GPT request handling.
 */
const express = require('express');
const dotenv = require('dotenv');
const { handleCvSuggestions, handleCvCustomization } = require('../utils/gptRequestHandlers');
/**
 * Initialize OpenAI API with the provided API key from environment variables.
 * This instance is used to make requests to the OpenAI API for generating text completions, which serve as the basis for CV suggestions, cover letters, and CV customizations.
 */
const OpenAI = require('openai-api');

dotenv.config({ path: './backend/.env' });

const router = express.Router();

module.exports = router;

// Initialize OpenAI with API key securely from environment variables
const openai = new OpenAI(process.env.OPENAI_API_KEY);

// CV Suggestions Route using Chat Completions
/**
 * Handles POST requests to generate CV suggestions based on a job description and user's CV.
 * @description This route processes POST requests to dynamically generate CV suggestions tailored to the user's CV and the job description provided.
 * @param {Object} req - The request object containing 'jobDescription' (String) and 'userCV' (String).
 * @param {Object} res - The response object used to return the suggestions or an error message.
 * @returns {void} - Sends a JSON response with CV suggestions or an error status.
 * @throws {Error} - Returns a 500 status code with an error message if the request fails.
 */
/**
 * POST /cv_suggestions
 * Purpose: Generates CV suggestions tailored to the user's CV and a given job description.
 * Request parameters: jobDescription (String), userCV (String)
 * Response: JSON object containing tailored CV suggestions.
 */
router.post('/cv_suggestions', async (req, res) => {
 * Handles the generation of CV suggestions based on a given job description and user's CV.
 * @param {Object} req - The request object containing 'jobDescription' and 'userCV'.
 * @param {Object} res - The response object used to return the suggestions or an error message.
 * @returns {void} - Sends a JSON response with CV suggestions or an error status.
 */

  const { jobDescription, userCV } = req.body;
  try {
    const suggestions = await handleCvSuggestions(jobDescription, userCV);
    console.log("CV suggestions generated successfully.");
    res.json(suggestions);
  } catch (error) {
    console.error(`Error processing CV suggestion request: ${error.message}`);
    res.status(500).json({ error: "Failed to generate CV suggestions." });
  } finally {
    console.log("Attempted operation on /cv_suggestions.");
  }
});

/**
 * POST route for generating a cover letter.
/**
 * Handles POST requests to generate a customized cover letter based on a job description and user's CV.
 * @description This route processes POST requests to generate a cover letter that is customized based on the user's CV and the job description provided.
 * @param {Object} req - The request object containing 'jobDescription' (String) and 'userCV' (String).
 * @param {Object} res - The response object used to return the generated cover letter or an error message.
 * @returns {void} - Sends a JSON response containing the generated cover letter.
 * @throws {Error} - Returns a 500 status code with an error message if the request fails.
 */

 */
router.post('/cover_letter', async (req, res) => {
/**
 * POST /cover_letter
 * Generates a cover letter based on a job description and user's CV.
 * Inputs: jobDescription (String), userCV (String)
 * Output: JSON object containing the generated cover letter
 * Exceptions: Returns a 500 status code with an error message if the request fails.
 */
  const { jobDescription, userCV } = req.body;
  try {
    const analysisResults = await generateCoverLetter(jobDescription, userCV);
    logCoverLetterGeneration();
    res.json(analysisResults);
  } catch (error) {
    handleCoverLetterError(error, res);
  }

});

/**
 * Handles POST requests to generate CV customization suggestions based on a job description and user's CV.
 * @description This route processes POST requests to generate CV customization suggestions, leveraging the OpenAI API's `createCompletion` method to tailor suggestions to the user's CV and the job description provided.
 * @param {Object} req - The request object containing 'jobDescription' (String) and 'userCV' (String).
 * @param {Object} res - The response object used to return the CV customization suggestions or an error message.
 * @returns {void} - Sends a JSON response containing CV customization suggestions.
 * @throws {Error} - Returns a 500 status code with an error message if the request fails.
 */
router.post('/cv_customization', async (req, res) => {
  const { jobDescription, userCV } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: `Customize CV based on job description: ${jobDescription} and user's CV: ${userCV}`,
      max_tokens: 1024,
      n: 1,
      stop: null,
      temperature: 0.5,
    });
    console.log("CV customization suggestions generated successfully.");
    res.json({ analysisResults: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error(`Error processing CV customization request: ${error.message}`);
    res.status(500).json({ error: "Failed to generate CV customization suggestions." });
  } finally {
    console.log("Attempted operation on /cv_customization.");
  }
/**
 * POST route for CV customization suggestions.
 * Receives a job description and user's CV in the request body and provides suggestions for customizing the CV accordingly.
 */

/**
 * POST /cv_customization
 * Generates CV customization suggestions based on a job description and user's CV.
 * Inputs: jobDescription (String), userCV (String)
 * Output: JSON object containing CV customization suggestions
 * Exceptions: Returns a 500 status code with an error message if the request fails.
 */
router.post('/cv_customization', async (req, res) => {
