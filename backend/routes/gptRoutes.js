const express = require('express');
const dotenv = require('dotenv');
const { handleCvSuggestions, handleCoverLetter } = require('../utils/gptRequestHandlers');

dotenv.config({ path: './backend/.env' });

const router = express.Router();
const openai = new OpenAI();

// CV Suggestions Route using Chat Completions
router.post('/cv_suggestions', async (req, res) => {
/**

 * This file defines the routes for generating CV suggestions, cover letters, and CV customization using OpenAI's GPT models.
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

// Cover Letter Route using Chat Completions
router.post('/cover_letter', async (req, res) => {
  const { jobDescription, userCV } = req.body;
  try {
    const response = await openai.chat.completions.create({
    console.log("Cover letter analysis and feedback generated successfully."); // gpt_pilot_debugging_log
    res.json(analysisResults);
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
 * Handles the generation of personalized cover letters using GPT models.
 * @async
 * @function coverLetterHandler
 * @param {Object} req - The request object containing job description, user name, skills, and experience.
 * @param {Object} res - The response object used to return the cover letter.
 * @throws {Error} When GPT model fails to generate the cover letter.
 * @return {Promise<Object>} A promise that resolves to an object containing the personalized cover letter.
 */
        }
      ],
      model: "gpt-3.5-turbo",

    });

    console.log("CV customization suggestions generated successfully."); // gpt_pilot_debugging_log
    res.json({ analysisResults: response.choices[0].message.content.trim() });
  } catch (error) {
    console.error(`Error processing CV customization request: ${error.message}, Stack: ${error.stack}`); // gpt_pilot_debugging_log
    res.status(500).json({ error: "Failed to generate CV customization suggestions." });
  }
  // Placeholder for DOC download logic
  console.log("Downloading DOC...");
  // Simulate sending the DOC file for download