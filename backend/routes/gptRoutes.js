/**
 * gptRoutes.js
 * This file contains Express routes for interacting with GPT models to generate CV suggestions, cover letters, and CV customizations.
 * It utilizes the OpenAI API to process user inputs and generate relevant outputs for job application materials.
 */
const express = require('express');
const dotenv = require('dotenv');
const { handleCvSuggestions, handleCvCustomization } = require('../utils/gptRequestHandlers');
const OpenAI = require('openai-api'); // Ensure you have required OpenAI correctly

dotenv.config({ path: './backend/.env' });

const router = express.Router();

// Assuming you have initialized OpenAI with API key somewhere
const openai = new OpenAI(process.env.OPENAI_API_KEY);

// CV Suggestions Route using Chat Completions
/**
 * POST /cv_suggestions
 * Generates CV suggestions based on a job description and user's CV.
 * Inputs: jobDescription (String), userCV (String)
 * Output: JSON object containing CV suggestions
 * Exceptions: Returns a 500 status code with an error message if the request fails.
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
 * Takes a job description and user's CV from the request body and returns a customized cover letter.

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

// Resume Customization Route using Chat Completions
router.post('/cv_customization', async (req, res) => {
  const { jobDescription, userCV } = req.body;
  try {
    // Correct your async call here with proper parameters
    const response = await openai.createCompletion({
      // Assuming 'createCompletion' is the correct method you intended to use
      // Include your intended parameters here
    });
    console.log("CV customization suggestions generated successfully.");
    res.json({ analysisResults: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error(`Error processing CV customization request: ${error.message}`);
    res.status(500).json({ error: "Failed to generate CV customization suggestions." });
  } finally {
    console.log("Attempted operation on /cv_customization.");
  }

      model: "gpt-3.5-turbo",

    });
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
