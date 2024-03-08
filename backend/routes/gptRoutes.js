/**
 * Routes for generating CV suggestions, cover letters, and CV customization based on user input and job descriptions.
 * Utilizes OpenAI's GPT models for content generation and analysis.
 */
const express = require('express');
const dotenv = require('dotenv');
const { handleCvSuggestions, handleCvCustomization } = require('../utils/gptRequestHandlers');

dotenv.config({ path: './backend/.env' });

const router = express.Router();
const openai = new OpenAI();

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
    console.log("CV suggestions generated successfully."); // gpt_pilot_debugging_log
    res.json(suggestions);
  } catch (error) {
    console.error(`Error processing CV suggestion request: ${error.message}, Stack: ${error.stack}`); // gpt_pilot_debugging_log
    res.status(500).json({ error: "Failed to generate CV suggestions." });
  }
});

/**
 * POST route for generating a cover letter.
 * Takes a job description and user's CV from the request body and returns a customized cover letter.
 */
router.post('/cover_letter', async (req, res) => {
  const { jobDescription, userCV } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "text-davinci-003",
      prompt: `Create a cover letter based on the job description: ${jobDescription} and user CV: ${userCV}`,
      max_tokens: 1000,
    });
    console.log("Cover letter generated successfully."); // Debug log
    res.json({ coverLetter: response.choices[0].text.trim() });
  } catch (error) {
    console.error(`Error processing cover letter request: ${error.message}, Stack: ${error.stack}`);
    res.status(500).json({ error: "Failed to generate cover letter." });
  }
});


module.exports = router;
// Resume Customization Route using Chat Completions
router.post('/cv_customization', async (req, res) => {
  const { jobDescription, userCV } = req.body;

  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output a list of CV customization suggestions based on the job description in plain text."
        },
        {
          role: "user",
          content: `Please analyze the CV in comparison to the job description and provide customization suggestions.\nJob Description: ${jobDescription}\nUser CV: ${userCV}`
/**
 * Provides CV customization suggestions based on a job description and the user's CV.
 * @param {Object} req - The request object containing 'jobDescription' and 'userCV'.
 * @param {Object} res - The response object used to return customization suggestions or an error message.
 * @returns {void} - Sends a JSON response with customization suggestions or an error status.
 */
        }
      ],
    });
    logSuccess("CV analysis and customization suggestions generated successfully.");
    res.json({ analysisResults: response.choices[0].message.content.trim() });
  } catch (error) {
    logError(error);
    handleError(res, "Failed to generate CV customization suggestions.", 500);
  }
      model: "gpt-3.5-turbo",

    });
/**
 * POST route for CV customization suggestions.
 * Receives a job description and user's CV in the request body and provides suggestions for customizing the CV accordingly.
 */

  // Placeholder for DOC download logic
  // Simulate sending the DOC file for download