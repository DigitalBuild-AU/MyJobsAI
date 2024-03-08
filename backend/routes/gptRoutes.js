const express = require('express');
const dotenv = require('dotenv');
const { handleCvSuggestions, handleCvCustomization } = require('../utils/gptRequestHandlers');

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
      console.log("Cover letter analysis and feedback generated successfully."); // Debug log
      res.json(analysisResults);
    } catch (error) {
      console.error(`Error processing cover letter request: ${error.message}, Stack: ${error.stack}`);
      res.status(500).json({ error: "Failed to generate cover letter analysis." });
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
 * POST route to generate CV customization suggestions.
 * This route takes a job description and user CV as input and uses OpenAI's GPT models to generate suggestions for customizing the CV to better match the job description.
 * @route POST /cv_customization
 * @param {Object} req.body - Contains 'jobDescription' and 'userCV'.
 * @returns {Object} - The response object containing 'analysisResults' with the generated suggestions.
 * @throws {500} - Returns a 500 status code if there is an error in generating suggestions.
 */
        }
      ],
    });
    console.log("CV analysis and customization suggestions generated successfully."); // gpt_pilot_debugging_log
    res.json({ analysisResults: response.choices[0].message.content.trim() });
  } catch (error) {
    console.error(`Error processing CV customization request: ${error.message}, Stack: ${error.stack}`);
    res.status(500).json({ error: "Failed to generate CV customization suggestions." });
  }
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