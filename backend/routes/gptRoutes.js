/**
 * Routes for generating CV suggestions, cover letters, and CV customization based on user input and job descriptions.
 * Utilizes OpenAI's GPT models for content generation and analysis.
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
 * POST route for generating CV suggestions.
 * Accepts a job description and user's CV in the request body and returns a list of suggestions for CV improvement.
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

module.exports = router;
