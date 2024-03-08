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

// Cover Letter Route using Chat Completions
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
    const response = await openai.createCompletion({
      prompt: `Create a cover letter based on the job description: ${jobDescription} and user CV: ${userCV}`,
      max_tokens: 1000,
    });
    console.log("Cover letter generated successfully.");
    res.json({ coverLetter: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error(`Error processing cover letter request: ${error.message}`);
    res.status(500).json({ error: "Failed to generate cover letter." });
  } finally {
    console.log("Attempted operation on /cover_letter.");
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
});

module.exports = router;
/**
 * POST /cv_customization
 * Generates customized CV suggestions based on a job description and user's CV.
 * Inputs: jobDescription (String), userCV (String)
 * Output: JSON object containing customized CV suggestions
 * Exceptions: Returns a 500 status code with an error message if the request fails.
 */
