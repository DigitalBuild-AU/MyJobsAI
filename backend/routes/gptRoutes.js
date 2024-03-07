const express = require('express');
const { OpenAI } = require('openai');
const dotenv = require('dotenv');

dotenv.config({ path: './backend/.env' });

const router = express.Router();
const openai = new OpenAI();

// CV Suggestions Route using Chat Completions
router.post('/cv_suggestions', async (req, res) => {
/**
 * Routes for generating content with GPT models.
 * This includes CV suggestions, cover letters, and CV customization suggestions.
 */
  const { jobDescription, userCV } = req.body;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output a list of suggestions for CV improvement in plain text."
        },
        {
          role: "user",
          content: `Extract keywords from this job description and compare to a CV.\nJob Description: ${jobDescription}\nUser CV: ${userCV}`
        }
      ],
      model: "gpt-3.5-turbo",
    });
    console.log("CV suggestions generated successfully."); // gpt_pilot_debugging_log
    res.json({ suggestions: response.choices[0].message.content.trim() });
  } catch (error) {
    console.error(`Error processing CV suggestion request: ${error.message}, Stack: ${error.stack}`); // gpt_pilot_debugging_log
    res.status(500).json({ error: "Failed to generate CV suggestions." });
  }
});

// Cover Letter Route using Chat Completions
router.post('/cover_letter', async (req, res) => {
  const { jobDescription, userName, userSkills, userExperience } = req.body;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output a personalized cover letter for a job application in plain text."
        },
        {
          role: "user",
          content: `Please generate a personalized cover letter using the provided details.\nJob Description: ${jobDescription}\nName: ${userName}\nSkills: ${userSkills}\nExperience: ${userExperience}`
        }
      ],
/**
 * Handles the generation of CV suggestions using GPT models.
 * @async
 * @function cvSuggestionsHandler
 * @param {Object} req - The request object containing job description and user CV.
 * @param {Object} res - The response object used to return suggestions.
 * @throws {Error} When GPT model fails to generate suggestions.
 * @return {Promise<Object>} A promise that resolves to an object containing CV suggestions.
 */
      model: "gpt-3.5-turbo",
    });
    console.log("Cover letter generated successfully."); // gpt_pilot_debugging_log
    res.json({ coverLetter: response.choices[0].message.content.trim() });
  } catch (error) {
    console.error(`Error generating cover letter: ${error.message}, Stack: ${error.stack}`); // gpt_pilot_debugging_log
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
});
/**
 * Handles the generation of CV customization suggestions using GPT models.
 * @async
 * @function cvCustomizationHandler
 * @param {Object} req - The request object containing job description and user CV.
 * @param {Object} res - The response object used to return customization suggestions.
 * @throws {Error} When GPT model fails to generate customization suggestions.
 * @return {Promise<Object>} A promise that resolves to an object containing CV customization suggestions.
 */